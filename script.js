const botaoGerarCarta = document.querySelector('#gerar-carta');
const quadroDeCartas = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');

function criarCarta() {
  valorSalvo = cartaTexto.value;
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
        novaCarta.className = 'carta';
        quadroDeCartas.appendChild(novaCarta);

        textoRestante = textoRestante.substr(palavra.length + 1);
        palavra = '';
        x = -1;
      }
    }
  }
  cartaTexto.value = valorSalvo;
}

botaoGerarCarta.addEventListener('click', criarCarta);
