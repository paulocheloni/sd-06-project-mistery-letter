const generateLetter = document.getElementById('carta-gerada');
const btnGenerateLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');

function createLetter() {
  let inputWords = inputLetter.value;
  inputWords = inputWords.split(' ');
  for (let index = 0; index < inputWords.length; index += 1) {
    const createWords = document.createElement('span');
    generateLetter.appendChild(createWords);
    createWords.innerHTML = inputWords[index];
  }
}

window.onload = function () {
  btnGenerateLetter.addEventListener('click', createLetter);
};
