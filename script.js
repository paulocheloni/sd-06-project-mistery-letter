const botaoGerarCarta = document.querySelector('#criar-carta');
const quadroDeCartas = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');
const grupoEstilo = {
  0: 'newspaper',
  1: 'magazine1',
  2: 'magazine2',
};
const grupoTamanho = {
  0: 'medium',
  1: 'big',
  2: 'reallybig',
};
const grupoRotacao = {
  0: 'rotateleft',
  1: 'rotateright',
};
const grupoInclinacao = {
  0: 'skewleft',
  1: 'skewright',
};
const visorDePalavras = document.querySelector('#carta-contador');
let contadorDePalavras = 0;

function zeroOuUm() {
  const selecionaQual = Math.floor(Math.random() * 2);
  return selecionaQual;
}

function zeroADois() {
  const selecionaQual = Math.floor(Math.random() * 3);
  return selecionaQual;
}

function selecionaEstilo() {
  if (zeroADois() === 0) {
    return '';
  }
  return grupoEstilo[zeroADois()];
}

function selecionaTamanho() {
  if (zeroADois() === 0) {
    return '';
  }
  return grupoTamanho[zeroADois()];
}

function selecionaRotacao() {
  if (zeroADois() === 0) {
    return '';
  }
  return grupoRotacao[zeroOuUm()];
}

function selecionaInclinacao() {
  if (zeroADois() === 0) {
    return '';
  }
  return grupoInclinacao[zeroOuUm()];
}

function criarCarta() {
  const valorSalvo = cartaTexto.value;
  cartaTexto.value += ' ';
  let textoRestante = cartaTexto.value;
  let palavra = '';

  if (textoRestante.length < 1 || textoRestante.trim() === '') {
    quadroDeCartas.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    quadroDeCartas.innerText = '';
    for (let x = 0; x < textoRestante.length; x += 1) {
      if (textoRestante[x] !== ' ') {
        palavra += textoRestante[x];
      } else {
        const novaCarta = document.createElement('span');
        novaCarta.innerText = palavra;
        novaCarta.className = `${selecionaEstilo()} ${selecionaTamanho()} ${selecionaRotacao()} ${selecionaInclinacao()} carta`;
        quadroDeCartas.appendChild(novaCarta);
        contadorDePalavras += 1;

        textoRestante = textoRestante.substr(palavra.length + 1);
        palavra = '';
        x = -1;
      }
    }
  }
  cartaTexto.value = valorSalvo;
  visorDePalavras.innerText = contadorDePalavras;
}

botaoGerarCarta.addEventListener('click', criarCarta);

quadroDeCartas.addEventListener('click', function () {
  const elementoSelecionado = event.target;
  if (elementoSelecionado.classList.contains('carta')) {
    elementoSelecionado.className = `${selecionaEstilo()} ${selecionaTamanho()} ${selecionaRotacao()} ${selecionaInclinacao()} carta`;
  }
});

