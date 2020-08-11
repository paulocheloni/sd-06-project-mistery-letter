const text = document.querySelector('#carta-texto');
const divText = document.querySelector('#carta-gerada');
let palavra = [];
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];
const contador = document.querySelector('#carta-contador');
let total = 0;

const splitSentence = () => {
  const valor = text.value;
  palavra = valor.split(' ');
  total = palavra.length;
  return palavra;
};

const clearFields = () => {
  divText.innerHTML = '';
  while (divText.firstChild) {
    divText.firstChild.remove();
  }
};

const sorteia = (arr) => {
  const pos = Math.floor(Math.random() * arr.length);
  return arr[pos];
};

function populateSpan() {
  splitSentence();
  if (palavra[0] === '') {
    divText.innerHTML = 'Por favor, digite o conteúdo da carta.';
    contador.innerHTML = '';
  } else {
    clearFields();
    for (let index = 0; index < palavra.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = `${palavra[index]}`;
      divText.appendChild(span);
      const classesEstilo = sorteia(grupoEstilo);
      const classesTamanho = sorteia(grupoTamanho);
      const classesRotacao = sorteia(grupoRotacao);
      const classesInclinacao = sorteia(grupoInclinacao);
      span.className = `${classesEstilo} ${classesTamanho} ${classesRotacao} ${classesInclinacao}`;
    }
    contador.innerHTML = total;
  }
}

const changeClass = (event) => {
  const click = event.target;
  const classesEstilo = sorteia(grupoEstilo);
  const classesTamanho = sorteia(grupoTamanho);
  const classesRotacao = sorteia(grupoRotacao);
  const classesInclinacao = sorteia(grupoInclinacao);
  click.className = `${classesEstilo} ${classesTamanho} ${classesRotacao} ${classesInclinacao}`;
};

window.onload = function () {
  document.querySelector('#criar-carta').addEventListener('click', populateSpan);
  divText.addEventListener('click', changeClass);
};
