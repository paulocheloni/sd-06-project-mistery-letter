function generateClasses() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2', 'no-styling'];
  const sizeGroup = ['medium', 'big', 'reallybig', 'no-sizing'];
  const rotationGroup = ['rotateleft', 'rotateright', 'no-rotation'];
  const skewGroup = ['skewleft', 'skewright', 'no-skew'];

  const styleGroupIndex = Math.floor(Math.random() * 3 + 0.3);
  const sizeGroupIndex = Math.floor(Math.random() * 3 + 0.3);
  const rotationGroupIndex = Math.floor(Math.random() * 2 + 0.3);
  const skewGroupIndex = Math.floor(Math.random() * 2 + 0.3);

  return [
    styleGroup[styleGroupIndex],
    sizeGroup[sizeGroupIndex],
    rotationGroup[rotationGroupIndex],
    skewGroup[skewGroupIndex]
  ]
}

function generateLetter(text) {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.innerHTML = '';

  const adjustPonctuation = text.trim().replace(',', ' ,').replace('!', ' !').replace('?', ' ?').replace('.', ' .');
  const wordsToMystify = adjustPonctuation.split(/ +/);

  wordsToMystify.forEach((word) => {
    const spanElement = document.createElement('span');

    spanElement.appendChild(document.createTextNode(word));
    addStyles(spanElement);
    spanElement.style.cursor = 'pointer';

    spanElement.addEventListener('click', (event) => {
      event.target.className = '';
      addStyles(event.target);
    })

    letterContainer.appendChild(spanElement)
  })
}
function addStyles(element) {
  const styles = generateClasses();

  styles.forEach((style) => {
    element.classList.add(style)
  })
}

function updateCounter(text) {
  const words = text.trim().split(' ');
  const counterContainer = document.getElementById('carta-contador');
  counterContainer.innerText = words.length;
}

function enableButton() {
  const inputElement = document.getElementById('carta-texto');
  const buttonElement = document.getElementById('criar-carta');

  buttonElement.onclick =  () => {
    if (inputElement.value.trim() === '') {
      alert('Por favor, digite o conteúdo da carta');
    } else {
      generateLetter(inputElement.value);
      updateCounter(inputElement.value);
      const letter = document.querySelector('.generated-letter');
      const counterElement = document.querySelector('.counter');

      letter.classList.remove('hide');
      counterElement.classList.remove('hide');
    }
  }
}

window.onload = () => {
  enableButton();
}