const letter = document.querySelector('#carta-gerada');
const letterText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
button.addEventListener('click', function () {
  const span = document.createElement('span');
  letter.appendChild(span);
  if (letterText.value.length === 0 || letterText.value.trim() === "") {
    alert('Por favor, digite o conteúdo da carta.');
  }
});
