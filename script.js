const generateLetter = document.getElementById('carta-gerada');
const btnGenerateLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const countLetter = document.getElementById('carta-contador');

function verifyMessage() {
  if (inputLetter.value.trim() === '') {
    generateLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  return true;
}

function randomClasses() {
  const styleGroup = ['newspaper', 'magazine', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotateGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const space = ' ';
  for (let index = 0; index < 3; index += 1) {
    let randomStyle = styleGroup[Math.floor(Math.random() * 3)];
    let randomSize = sizeGroup[Math.floor(Math.random() * 3)];
    let randomRotate = rotateGroup[Math.floor(Math.random() * 2)];
    let randomSkew = skewGroup[Math.floor(Math.random() * 2)];
    return randomStyle + space + randomSize + space + randomRotate + space + randomSkew;
  }
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
  if (inputLetter.value.trim() === '') {
    generateLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
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
