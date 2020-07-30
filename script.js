const letter = document.querySelector('#carta-gerada');
const letterText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
button.addEventListener('click', function (){
  let span = document.createElement('span');
  letter.appendChild(span);
});