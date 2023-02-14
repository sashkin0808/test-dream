import '../sass/style.scss';
import NativejsSelect from 'nativejs-select';
import initDealCarrousel from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const modal = body.querySelector('.popup');
  const modalClose = modal.querySelector('.popup__close');
  const modalTrigger = body.querySelector('[href="#form"]');

  modalTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('open');
    body.classList.add('no-scroll');
  });
  modalClose.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('open');
    body.classList.remove('no-scroll');
  });

  const likeBtns = document.querySelectorAll('.tours-item__like');

  likeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = event.target || event.srcElement;
      btn.parentElement.parentElement.classList.toggle('tours-item_liked');
    });
  });

  new NativejsSelect({
    selector: '.customSelect',
    placeholder: 'Сhoose',
    renderOptions: (option) => {
      return `
        <span class="nativejs-select__value_selected">${option.textContent}</span>
      `;
    }
  });

  initDealCarrousel('gallery');
  initDealCarrousel('tours');
});



