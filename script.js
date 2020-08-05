const text = document.querySelector('#carta-texto');
const divText = document.querySelector('#carta-gerada');
const arr = [];

function splitSentence() {
  const valor = text.value;
  let palavra = '';
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] !== ' ') {
      palavra += valor[index];
    } else {
      arr.push(palavra);
      palavra = '';
    }
  }
  arr.push(palavra);
  return arr;
}

function populateSpan() {
  splitSentence();
  for (let index = 0; index < arr.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = `${arr[index]}`;
    divText.appendChild(span);
  }
}

window.onload = function () {
  document.querySelector('#criar-carta').addEventListener('click', populateSpan);
};
