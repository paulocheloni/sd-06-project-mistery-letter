const botaoCriar = document.getElementById('criar-carta')
const inputCarta = document.getElementById('carta-texto')
const outputCarta = document.getElementById('carta-gerada')

//Faz o texto aparecer no parágrafo
botaoCriar.addEventListener('click', function () {
  outputCarta.innerText = inputCarta.value
})