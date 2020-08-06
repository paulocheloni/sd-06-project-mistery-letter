const generateLetter = document.getElementById('carta-gerada');
const btnGenerateLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const countLetter = document.getElementById('carta-contador');

const classesGroup = ['newspaper', 'magazine', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function verifyMessage() {
  if (inputLetter.value === '' || inputLetter.value.trim() === '') {
    generateLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  return true;
}

function randomClasses() {
  const random = Math.floor(Math.random() * 10);
  return classesGroup[random];
}

function removeAllWords() {
  while (generateLetter.firstChild) {
    generateLetter.removeChild(generateLetter.lastChild);
  }
  while (countLetter.firstChild) {
    countLetter.removeChild(countLetter.lastChild);
  }
}

function createLetter() {
  if (verifyMessage() === true) {
    removeAllWords();
    let counter = 0;
    let inputWords = inputLetter.value;
    inputWords = inputWords.split(' ');
    for (let index = 0; index < inputWords.length; index += 1) {
      const createWords = document.createElement('span');
      createWords.className = randomClasses();
      generateLetter.appendChild(createWords);
      createWords.innerHTML = inputWords[index];
      counter += 1;
    }
    countLetter.innerHTML = counter;
  }
}

window.onload = function () {
  btnGenerateLetter.addEventListener('click', createLetter);
};
