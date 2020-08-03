const botaoGerarCarta = document.querySelector('#criar-carta');
const quadroDeCartas = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];
const visorDePalavras = document.querySelector('#carta-contador');

function zeroOuUm() {
  const selecionaQual = Math.floor(Math.random() * 2);
  return selecionaQual;
}

function zeroADois() {
  const selecionaQual = Math.floor(Math.random() * 3);
  return selecionaQual;
}

function sorteador() {
  let novoConjuntoDeClasses = '';
  let verificadorDeMinimoDeClasses = 0;

  if (zeroOuUm() === 1) {
    novoConjuntoDeClasses += `${grupoEstilo[zeroADois()]} `;
    verificadorDeMinimoDeClasses += 1;
  }

  if (zeroOuUm() === 1) {
    novoConjuntoDeClasses += `${grupoTamanho[zeroADois()]} `;
    verificadorDeMinimoDeClasses += 1;
  }

  if (zeroOuUm() === 1) {
    novoConjuntoDeClasses += `${grupoRotacao[zeroOuUm()]} `;
    verificadorDeMinimoDeClasses += 1;
  } else if (verificadorDeMinimoDeClasses < 2) {
    novoConjuntoDeClasses += `${grupoRotacao[zeroOuUm()]} `;
    verificadorDeMinimoDeClasses += 1;
  }

  if (zeroOuUm() === 1) {
    novoConjuntoDeClasses += `${grupoInclinacao[zeroOuUm()]} `;
    verificadorDeMinimoDeClasses += 1;
  } else if (verificadorDeMinimoDeClasses < 2) {
    novoConjuntoDeClasses += `${grupoInclinacao[zeroOuUm()]} `;
  }

  return novoConjuntoDeClasses.trim();
}

function criarCarta() {
  const stringTotal = cartaTexto.value;

  if (stringTotal.length < 1 || stringTotal.trim() === '') {
    quadroDeCartas.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let contadorDePalavras = 0;
    quadroDeCartas.innerText = '';
    const palavras = stringTotal.split(' ');
    for (let x = 0; x < palavras.length; x += 1) {
      const palavra = palavras[x];
      if (palavra.trim() !== '') {
        const novaCarta = document.createElement('span');
        novaCarta.innerText = palavra;
        novaCarta.className = `${sorteador()}`;
        quadroDeCartas.appendChild(novaCarta);
        contadorDePalavras += 1;
      }
    }
    visorDePalavras.innerText = contadorDePalavras;
  }
}

botaoGerarCarta.addEventListener('click', criarCarta);

quadroDeCartas.addEventListener('click', function () {
  const elementoSelecionado = event.target;
  if (elementoSelecionado.parentNode === quadroDeCartas) {
    elementoSelecionado.className = `${sorteador()}`;
  }
});
