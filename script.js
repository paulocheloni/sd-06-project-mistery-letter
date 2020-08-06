const boxPhrase = document.getElementById('carta-texto');
const buttonGerarCarta = document.querySelector('#criar-carta');
console.log(boxPhrase.value)

function gerarCarta() {
  let phrase = boxPhrase.value.split(" ");
  console.log(phrase)




buttonGerarCarta.addEventListener('click', gerarCarta);
