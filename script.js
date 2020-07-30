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

const wordsCounter = (wordsArr) => {
  const counterParag = document.createElement('p');
  counterParag.id = 'carta-contador';
  counterParag.className = 'carta-contador';
  counterParag.textContent = `Palavras: ${wordsArr.length}`;
  responseParag.appendChild(counterParag);
};

const killParagChildren = () => {
  while (responseParag.firstChild) {
    responseParag.removeChild(responseParag.lastChild);
  }
};

letterButton.addEventListener('click', () => {
  killParagChildren();
  if (letterInput.value) {
    letter = letterInput.value;

    words = splitString(letter);
    separateWordsInSpan(words);
    wordsCounter(words);
  } else {
    responseParag.innerText = 'Por favor, digite o conteúdo da carta!';
  }
});
