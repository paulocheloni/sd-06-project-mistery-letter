const letterInput = document.querySelector('#carta-texto');
const letterButton = document.querySelector('#criar-carta');
const responseParag = document.querySelector('#carta-gerada');

let letter = '';
let words = [];

const splitString = (str) => str.split(' ');

const separateWordsInSpan = (arr) => {
  arr.forEach((item) => {
    const span = document.createElement('span');
    span.textContent = item;
    span.className = 'word';
    responseParag.appendChild(span);
  });
};

letterButton.addEventListener('click', () => {
  letter = letterInput.value;

  words = splitString(letter);
  separateWordsInSpan(words);
});
