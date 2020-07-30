const botaoCriar = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
const outputCarta = document.getElementById('carta-gerada');

//Faz o texto aparecer no parágrafo
botaoCriar.addEventListener('click', function () {
  let span = document.createElement('span')
  outputCarta.appendChild(span)
  span.innerText = inputCarta.value;
  if (span.innerText == "" || span.innerText.match(/^\s*$/)) {
    span.innerText = 'Por favor, digite o conteúdo da carta!'
  }
});


