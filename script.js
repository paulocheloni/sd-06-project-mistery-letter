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
    responseParag.appendChild(span);
  });
};

const wordsCounter = (wordsArr) => {
  const counterParag = document.querySelector('#carta-contador');
  counterParag.className = 'carta-contador';
  counterParag.textContent = `${wordsArr.length}`;
};

const eraseWordCounter = () => {
  const counterParag = document.querySelector('#carta-contador');
  counterParag.textContent = '';
};

const killParagChildren = () => {
  while (responseParag.firstChild) {
    responseParag.removeChild(responseParag.lastChild);
  }
};

letterButton.addEventListener('click', () => {
  killParagChildren();
  eraseWordCounter();
  if (letterInput.value) {
    letter = letterInput.value;

    words = splitString(letter);
    separateWordsInSpan(words);
    wordsCounter(words);
  } else {
    responseParag.innerText = 'Por favor, digite o conteúdo da carta!';
  }
});
