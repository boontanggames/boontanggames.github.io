/* An optional, local-only enhancement: every screenshot is still a normal image link. */
(() => {
  const links = [...document.querySelectorAll('a[data-lightbox]')];
  if (!links.length || typeof HTMLDialogElement === 'undefined' || typeof HTMLDialogElement.prototype.showModal !== 'function') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'image-lightbox';
  dialog.setAttribute('aria-labelledby', 'lightbox-title');
  dialog.innerHTML = '<div class="lightbox-header"><h2 class="lightbox-title" id="lightbox-title"></h2><button class="lightbox-close" type="button" aria-label="Close screenshot" autofocus><span class="close-word">Close</span><span aria-hidden="true">×</span></button></div><div class="lightbox-stage"><img alt=""></div><div class="lightbox-nav" aria-label="Screenshot navigation"><button type="button" data-direction="-1" aria-label="Previous screenshot">← <span>Previous</span></button><span class="lightbox-counter" role="status" aria-live="polite"></span><button type="button" data-direction="1" aria-label="Next screenshot"><span>Next</span> →</button></div>';
  document.body.append(dialog);
  const image = dialog.querySelector('img'), title = dialog.querySelector('h2'), counter = dialog.querySelector('.lightbox-counter');
  let group = [], index = 0, opener = null;
  function show(next) {
    index = (next + group.length) % group.length;
    const link = group[index], source = link.querySelector('img');
    image.src = link.href;
    image.alt = source?.alt || link.dataset.caption || 'Eggy Weggy screenshot';
    title.textContent = link.dataset.caption || 'Inside Eggy Weggy';
    counter.textContent = `${index + 1} / ${group.length}`;
  }
  for (const link of links) link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    group = links.filter(item => item.dataset.lightbox === link.dataset.lightbox);
    opener = link;
    show(group.indexOf(link));
    try {
      dialog.showModal();
      document.body.classList.add('has-lightbox');
      event.preventDefault();
    } catch (_) { /* The ordinary image link remains available. */ }
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  for (const button of dialog.querySelectorAll('[data-direction]')) button.addEventListener('click', () => show(index + Number(button.dataset.direction)));
  dialog.addEventListener('keydown', event => {
    if (!dialog.open || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button:not(:disabled)')].filter(node => node.getClientRects().length);
      const first = controls[0], last = controls.at(-1), focused = document.activeElement;
      if (event.shiftKey && (focused === first || !dialog.contains(focused))) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (focused === last || !dialog.contains(focused))) {
        event.preventDefault(); first?.focus();
      }
      return;
    }
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    show(index + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('has-lightbox');
    image.removeAttribute('src');
    opener?.focus({ preventScroll: true });
  });
})();
