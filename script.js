const boxPhrase = document.querySelector('#carta-texto');
const buttonGerarCarta = document.querySelector('#criar-carta');

function gerarCarta() {
  if (boxPhrase.value === '') {
    document.getElementById('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    console.log(boxPhrase.value)
  }
}

buttonGerarCarta.addEventListener('click', gerarCarta);
