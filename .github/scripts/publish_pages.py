"""Reuse or request one configured legacy Pages publication, then verify it."""
import json
import os
import re
import subprocess
import time


def api(path, method='GET'):
    if method == 'GET':
        path += ('&' if '?' in path else '?') + f'check={time.time_ns()}'
    return json.loads(subprocess.check_output(
        ['gh', 'api', '--method', method, path], text=True, timeout=30))


def build_key(build):
    # The legacy API exposes an immutable build URL, not always an id field.
    url = build.get('url', '')
    match = re.search(r'/pages/builds/([0-9]+)$', url)
    if match:
        return match.group(1)
    value = build.get('id')
    if type(value) is int and value > 0:
        return str(value)
    raise RuntimeError('Pages build has no immutable identifier; inspect before publishing')


def publish(repository, expected, request=api, sleep=time.sleep,
            monotonic=time.monotonic, timeout=300, interval=10, log=print):
    if not re.fullmatch(r'[0-9a-f]{40}', expected):
        raise RuntimeError('Expected revision is not a complete commit SHA')
    deadline = monotonic() + timeout
    base = f'repos/{repository}'
    settings = request(base + '/pages')
    if (settings.get('build_type') != 'legacy'
            or settings.get('source') != {'branch': 'main', 'path': '/'}
            or settings.get('cname') != 'boontanggames.com'):
        raise RuntimeError('Pages source/domain changed; inspect before publishing')
    if request(base + '/commits/main')['sha'] != expected:
        raise RuntimeError('Main moved after dispatch; publish its current revision separately')

    path = base + '/pages/builds?per_page=100'
    builds = request(path)
    before = {build_key(build) for build in builds}
    # The API lists newest first. Prefer an existing queued/building/built
    # publication for this exact commit; a manual request would duplicate it.
    selected = next((build for build in builds
                     if build.get('commit') == expected
                     and build.get('status') in {'queued', 'building', 'built'}), None)
    selected_key = build_key(selected) if selected else None
    if selected:
        log(f'Reusing Pages build {selected_key} for {expected}', flush=True)
    else:
        request(base + '/pages/builds', 'POST')
        log(f'Requested one Pages build for {expected}', flush=True)

    while True:
        if selected:
            status = selected.get('status')
            if status == 'built':
                log('Published https://boontanggames.com/', flush=True)
                return selected
            if status == 'errored':
                raise RuntimeError(f'Pages build {selected_key} failed: {selected.get("error")}')
            if status not in {'queued', 'building'}:
                raise RuntimeError(f'Unexpected Pages status for {selected_key}: {status}')
        remaining = deadline - monotonic()
        if remaining <= 0:
            raise RuntimeError('The Pages build has not completed; inspect it before retrying')
        sleep(min(interval, remaining))
        builds = request(path)
        if selected_key:
            selected = next((build for build in builds
                             if build_key(build) == selected_key), None)
            if selected and selected.get('commit') != expected:
                raise RuntimeError('The selected Pages build revision changed')
        else:
            # After POST, /builds/latest may still be the old cancelled/errored
            # build of this SAME commit. Only a newly observed immutable build
            # can succeed or fail this request; old failures remain irrelevant.
            selected = next((build for build in builds
                             if build.get('commit') == expected
                             and build_key(build) not in before), None)
            if selected:
                selected_key = build_key(selected)


if __name__ == '__main__':
    try:
        publish(os.environ['GITHUB_REPOSITORY'], os.environ['EXPECTED_COMMIT'])
    except (RuntimeError, subprocess.SubprocessError) as error:
        raise SystemExit(str(error))
