const botaoCriar = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
const outputCarta = document.getElementById('carta-gerada');

//Faz o texto aparecer no parágrafo
botaoCriar.addEventListener('click', function () {
  for (let i = 0; i < inputCarta.value.length; i+= 1) {
    let span = document.createElement('span')
    outputCarta.appendChild(span)
    span.innerText += inputCarta.value[i];
    outputCarta.appendChild(span)
  }
});

/*function addClass (event){
let span = event.target
var classes = ['newspaper', 'medium', 'rotateleft', 'skewleft']
}*/

/*if (outputCarta.innerText == "" || outputCarta.match(/^\s*$/)) {
  outputCarta.innerText = 'Por favor, digite o conteúdo da carta!'
}
}*/
