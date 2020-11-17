const words = document.querySelector('#carta-gerada');
const createLetter = document.querySelector('#criar-carta');

function randomClass() {
  const arrayStyle = ['newspaper', 'magazine1', 'magazine2'];
  const arraySize = ['medium', 'big', 'reallybig'];
  const arrayTransform = ['rotateleft', 'rotateright', 'skewleft', 'skewright'];
  const space = ' ';
  let classes = arrayStyle[Math.floor(Math.random() * (arrayStyle.length))];
  classes += space + arraySize[Math.floor(Math.random() * (arraySize.length))];
  classes += space + arrayTransform[Math.floor(Math.random() * (arrayTransform.length))];
  return classes;
}

function createWords() {
  const inputText = document.querySelector('#carta-texto');
  const wordCount = document.querySelector('#carta-contador');
  const arrayWords = inputText.value.trim().split(' ');
  if (inputText.value.trim() === '') {
    words.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  words.innerHTML = '';
  for (let index = 0; index < arrayWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = arrayWords[index];
    span.className = randomClass();
    words.appendChild(span);
  }
  wordCount.innerHTML = arrayWords.length;
}

createLetter.addEventListener('click', createWords);
