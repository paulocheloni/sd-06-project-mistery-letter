// Apaga todas as palavras da carta gerada
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
  const arrayWords = inputText.value.split(' ');
  removeAllWords();
  for (let index = 0; index < arrayWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = arrayWords[index];
    addWord.appendChild(span);
  }
}

const createLetter = document.querySelector('#criar-carta');
createLetter.addEventListener('click', createWords);

