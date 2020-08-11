const text = document.querySelector('#carta-texto');
const divText = document.querySelector('#carta-gerada');
let palavra = [];

const splitSentence = () => {
  const valor = text.value;
  palavra = valor.split(' ');
  return palavra;
};

const clearFields = () => {
  divText.innerHTML = '';
  while (divText.firstChild) {
    divText.firstChild.remove();
  }
};

function populateSpan() {
  splitSentence();
  if (palavra[0] === '') {
    divText.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    clearFields();
    for (let index = 0; index < palavra.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = `${palavra[index]}`;
      divText.appendChild(span);
    }
  }
}

window.onload = function () {
  document.querySelector('#criar-carta').addEventListener('click', populateSpan);
};
