const contador = document.querySelector('#carta-contador');
const letter = document.querySelector('#carta-gerada');
const letterText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
button.addEventListener('click', function () {
  arrayStrings = letterText.value.split(' ');
  if (letterText.value.length === 0 || letterText.value.trim() === '') {
    letter.innerHTML = ('por favor, digite o conteúdo da carta!');
  } else {
    while (letter.firstChild) {
      letter.removeChild(letter.firstChild);
    }
    for (let i = 0; i < arrayStrings.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = arrayStrings[i];
      letter.appendChild(span);
    }
  }
  contador.innerHTML = arrayStrings.length;
});
