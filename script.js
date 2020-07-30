const input = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];
const arrayClass = [styleGroup, sizeGroup, rotateGroup, inclinationGroup];

function takeClass() {
  const classes = arrayClass;
  let stringClasses = '';
  for (let i = 0; i < 4; i += 1) {
    const random = Math.floor(Math.random() * classes[i].length);
    stringClasses += ` ${classes[i][random]}`;
  }
  return stringClasses;
}

btnGenerate.addEventListener('click', () => {
  let string = input.value;
  string = string.split(' ');

  if (input.value.trim() === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta!';
  } else {
    for (let i = 0; i < string.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = string[i];
      span.className = takeClass();
      paragraph.appendChild(span);
    }
    cartaContador.innerHTML = `esta é uma carta com ${string.length} palavras`;
  }
});

paragraph.addEventListener('click', (event) => {
  const palavra = event.target;
  palavra.className = takeClass();
});
