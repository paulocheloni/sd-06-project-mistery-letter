const createLetterButton = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
let letterGenerated = document.getElementById('carta-gerada');

createLetterButton.addEventListener('click', function() {
  letterGenerated.innerHTML = inputText.value;
});
