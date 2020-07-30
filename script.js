const botaoCriar = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
const outputCarta = document.getElementById('carta-gerada');

//Faz o texto aparecer no parágrafo
botaoCriar.addEventListener('click', function () {
  outputCarta.childNodes[1].innerText = inputCarta.value;
  if (outputCarta.childNodes[1].innerText == "" || outputCarta.childNodes[1].innerText.match(/^\s*$/)) {
    outputCarta.childNodes[1].innerText = 'Por favor, digite o conteúdo da carta.'
  }
});


