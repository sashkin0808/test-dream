import '../sass/style.scss';
import NativejsSelect from 'nativejs-select';
import './modal.js';
import './carousel.js';

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