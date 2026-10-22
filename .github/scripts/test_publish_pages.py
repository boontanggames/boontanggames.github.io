import importlib.util
from pathlib import Path
import unittest


spec = importlib.util.spec_from_file_location('publish_pages', Path(__file__).with_name('publish_pages.py'))
pages = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pages)
SHA = 'a' * 40
OTHER = 'b' * 40


def build(identifier, status, commit=SHA):
    return {'url': f'https://api.github.com/repos/owner/site/pages/builds/{identifier}',
            'commit': commit, 'status': status, 'error': {'message': 'cancelled'}}


class FakePages:
    def __init__(self, snapshots):
        self.snapshots = list(snapshots)
        self.posts = 0
        self.reads = 0
        self.now = 0
        self.settings = {'build_type': 'legacy', 'source': {'branch': 'main', 'path': '/'},
                         'cname': 'boontanggames.com'}
        self.head = SHA

    def request(self, path, method='GET'):
        if method == 'POST':
            self.posts += 1
            return {'url': 'https://api.github.com/repos/owner/site/pages/builds/latest',
                    'status': 'queued'}
        if path.endswith('/pages'):
            return self.settings
        if path.endswith('/commits/main'):
            return {'sha': self.head}
        if path.endswith('/pages/builds?per_page=100'):
            self.reads += 1
            result = self.snapshots[0]
            if len(self.snapshots) > 1:
                self.snapshots.pop(0)
            return result
        raise AssertionError(f'Unexpected API request: {path}')

    def sleep(self, seconds):
        self.now += seconds

    def run(self, **options):
        return pages.publish('owner/site', SHA, request=self.request, sleep=self.sleep,
                             monotonic=lambda: self.now, log=lambda *_, **__: None, **options)


class PagesPublicationTests(unittest.TestCase):
    def test_existing_queued_and_building_are_awaited_without_post(self):
        for status in ['queued', 'building']:
            with self.subTest(status=status):
                api = FakePages([[build(4, status)], [build(4, 'building')], [build(4, 'built')]])
                self.assertEqual(api.run()['status'], 'built')
                self.assertEqual(api.posts, 0)

    def test_existing_built_returns_immediately_without_post_or_sleep(self):
        api = FakePages([[build(4, 'built')]])
        self.assertEqual(api.run()['status'], 'built')
        self.assertEqual((api.posts, api.reads, api.now), (0, 1, 0))

    def test_old_same_commit_failure_cannot_fail_new_request(self):
        old = build(3, 'errored')
        api = FakePages([[old], [old], [build(4, 'queued'), old],
                         [build(4, 'built'), old]])
        self.assertEqual(pages.build_key(api.run()), '4')
        self.assertEqual(api.posts, 1)

    def test_selected_existing_build_ignores_different_latest_failed_build(self):
        api = FakePages([[build(4, 'building')],
                         [build(5, 'errored', OTHER), build(4, 'built')]])
        self.assertEqual(pages.build_key(api.run()), '4')
        self.assertEqual(api.posts, 0)

    def test_actual_new_build_failure_is_not_hidden(self):
        api = FakePages([[build(3, 'errored')], [build(4, 'errored'), build(3, 'errored')]])
        with self.assertRaisesRegex(RuntimeError, 'build 4 failed'):
            api.run()
        self.assertEqual(api.posts, 1)

    def test_existing_build_failure_is_not_retried(self):
        api = FakePages([[build(4, 'building')], [build(4, 'errored')]])
        with self.assertRaisesRegex(RuntimeError, 'build 4 failed'):
            api.run()
        self.assertEqual(api.posts, 0)

    def test_timeout_never_requests_again_or_accepts_another_revision(self):
        api = FakePages([[], [build(4, 'built', OTHER)]])
        with self.assertRaisesRegex(RuntimeError, 'has not completed'):
            api.run(timeout=25)
        self.assertEqual(api.posts, 1)
        self.assertEqual(api.now, 25)

    def test_main_source_and_domain_guards_prevent_request(self):
        for fault in ['head', 'source', 'domain', 'build_type']:
            api = FakePages([[]])
            if fault == 'head':
                api.head = OTHER
            elif fault == 'source':
                api.settings['source'] = {'branch': 'other', 'path': '/'}
            else:
                api.settings['cname' if fault == 'domain' else fault] = 'other'
            with self.subTest(fault=fault), self.assertRaises(RuntimeError):
                api.run()
            self.assertEqual((api.posts, api.reads), (0, 0))


if __name__ == '__main__':
    unittest.main()
