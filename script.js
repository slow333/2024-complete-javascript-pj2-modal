'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let buttons = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openModal)
}

document.querySelector('.close-modal')
  .addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if(e.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
  }
})

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove("hidden");
}