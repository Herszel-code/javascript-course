'use strict';

// modal element
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
let lastFocusedElement = null;

const openModal = function () {
  // remove hidden classname in modal
  modalEl.classList.remove('hidden');
  // remove hidden keyword classname in overlay
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
  if (lastFocusedButton) lastFocusedButton.focus();
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute(`role`, `dialog`);
modalEl.setAttribute(`aria-modal`, `true`);

btnCloseModalEl.setAttribute(`aria-label`, `Close modal`);