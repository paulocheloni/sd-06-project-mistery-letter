// Gera classes aleatórias
function randomClass() {
  const arrayStyle = ['newspaper', 'magazine1', 'magazine2'];
  const arraySize = ['medium', 'big', 'reallybig'];
  const arrayRotation = ['rotateleft', 'rotateright'];
  const arraySkew = ['skewleft', 'skewright'];
  const space = ' ';
  let classes = arrayStyle[Math.floor(Math.random() * 3)];
  classes += space + arraySize[Math.floor(Math.random() * 3)];
  classes += space + arrayRotation[Math.floor(Math.random() * 2)];
  //classes += space + arraySkew[Math.floor(Math.random() * 2)];
  return classes;
}

// Limpa todas as palavras da carta gerada
function removeAllWords() {
  const allWords = document.querySelector('#carta-gerada');
  while (allWords.firstChild) {
    allWords.removeChild(allWords.lastChild);
  }
}

// Cria palavras da carta
function createWords() {
  const addWord = document.querySelector('#carta-gerada');
  const inputText = document.querySelector('#carta-texto');
  const arrayWords = inputText.value.trim().split(' ');
  if (inputText.value.trim() === '') {
    addWord.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  removeAllWords();
  for (let index = 0; index < arrayWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = arrayWords[index];
    span.className = randomClass();
    addWord.appendChild(span);
  }
}

const createLetter = document.querySelector('#criar-carta');
createLetter.addEventListener('click', createWords);
