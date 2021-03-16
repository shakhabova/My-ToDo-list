const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

let arr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value) return;

  const text = input.value;
  arr.push(text);
  render(text);

  input.value = '';
  localStorage.setItem('list', JSON.stringify(arr));
});

document.addEventListener('DOMContentLoaded', () => {
  arr = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < arr.length; i++) {
    render(arr[i]);
  }
});

function render(text) {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = text;
  list.appendChild(listItemEl);
  const button = document.createElement('button');
  button.textContent = '×';
  button.className='close'
  listItemEl.appendChild(button);
  button.addEventListener('click', () => {
    list.removeChild(listItemEl);
    arr = arr.filter(i => i !== text);
    localStorage.setItem('list', JSON.stringify(arr));
  });
}
