const body = document.querySelector('body');
const modal = body.querySelector('.popup');
const modalClose = modal.querySelector('.popup__close');
const modalTrigger = body.querySelector('[href="#form"]');

modalTrigger.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.add('open');
  body.classList.add('no-scroll');
});
modalClose.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.remove('open');
  body.classList.remove('no-scroll');
});