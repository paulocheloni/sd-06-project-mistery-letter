const input = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const arrayClass = ['newspaper','magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright']; 

function takeClass() {
  let classes = arrayClass;
  let random = Math.floor(Math.random() * 10);
  return classes[random];
}

btnGenerate.addEventListener('click', () => {
  let string = input.value;
  string = string.split(' ');

  if (input.value.trim() == "") {
    paragraph.innerHTML ='Por favor, digite o conteúdo da carta.';
  } else {  
    for (let i = 0; i < string.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = string[i];
      span.className = takeClass();
      paragraph.appendChild(span);
    }
  }
});

paragraph.addEventListener('click', (event) => {
  const palavra = event.target;
  palavra.className = takeClass();
});