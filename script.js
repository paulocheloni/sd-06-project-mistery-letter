const letterInput = document.querySelector('#carta-texto');
const letterButton = document.querySelector('#criar-carta');
const responseParag = document.querySelector('#carta-gerada');
const spans = [];

let letter = '';
let words = [];
const classes = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright', 'skewleft', 'skewright'],
  // skew: ['skewleft', 'skewright'],
};

// gerar numeros de 0 a num - 1
const generateRandomNumbers = (num) => Math.floor(Math.random() * num);

const getRandomClasses = () => {
  const styleClass = classes.style[generateRandomNumbers(3)];
  const sizeClass = classes.size[generateRandomNumbers(3)];
  const rotationClass = classes.rotation[generateRandomNumbers(4)];
  // const skewClass = classes.skew[generateRandomNumbers(2)];
  return [styleClass, sizeClass, rotationClass];
};

const setClasses = (span) => {
  const classesArray = getRandomClasses();
  if (span.classList) {
    span.className = '';
  }
  span.classList.add(...classesArray);
};

const splitString = (str) => str.split(' ');

const separateWordsInSpan = (arr) => {
  arr.forEach((item) => {
    const span = document.createElement('span');
    span.textContent = item;
    setClasses(span);
    responseParag.appendChild(span);
    spans.push(span);
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
    spans.pop();
  }
};

const spanEvent = (spansArr) => {
  spansArr.forEach((item) => {
    item.addEventListener('click', () => {
      setClasses(item);
    });
  });
};

letterButton.addEventListener('click', () => {
  killParagChildren();
  eraseWordCounter();
  if (letterInput.value && letterInput.value !== ' ') {
    letter = letterInput.value;
    words = splitString(letter);
    separateWordsInSpan(words);
    wordsCounter(words);
    spanEvent(spans);
  } else {
    responseParag.innerText = 'por favor, digite o conteúdo da carta!';
  }
});
