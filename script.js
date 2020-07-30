
const functionalities = {
  verifyAndEdit: function verifyAndEdit() {
    const inputTextElement = document.querySelector('#carta-texto');
    const text = inputTextElement.value;
    let occurrenceOfWhiteSpaceInARow = 0;
    while (text[occurrenceOfWhiteSpaceInARow] === ' ') {
      occurrenceOfWhiteSpaceInARow += 1;
    }
    if (occurrenceOfWhiteSpaceInARow !== text.length && text.value !== '') {
      functionalities.editLetterStyle(text);
    } else {
      document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta!';
    }
  },
  editLetterStyle: function editStyle(text) {
    const letterElement = document.querySelector('#carta-gerada');
    letterElement.innerHTML = '';
    let i = 0;
    let word = '';
    while (i < text.length) {
      word += text[i];
      if (text[i] === ' ' && word === ' ') {
        letterElement.innerHTML += '&nbsp;';
        word = '';
      } else if ((text[i] === ' ' || i === text.length - 1) && word !== '') {
        const spanElement = document.createElement('span');
        spanElement.className = functionalities.generateRandomStyle();
        letterElement.innerHTML += '&nbsp;';
        spanElement.innerHTML = word.replace(' ', '');
        letterElement.appendChild(spanElement);
        word = '';
      }
      i += 1;
    }
    functionalities.addEventToWords();
  },
  generateRandomStyle: function generateRandomStyle() {
    const classes = [
      ['newspaper', 'magazine1', 'magazine2'], // Style Group
      ['medium', 'big', 'reallybig'], // Size Group
      ['rotateleft', 'rotateright'], // Rotation Group
      ['skewleft', 'skewright'], // Inclination Group
    ];
    const numberOfClasses = Math.round((Math.random() * (4 - 2)) + 2); // It can be 2, 3 or 4
    let classString = '';
    for (let i = 0; i < numberOfClasses; i += 1) {
      const randomGroup = Math.round((Math.random() * (4 - i - 1)) + 1);
      const classInGroup = Math.round((Math.random() * (classes[randomGroup - 1].length - 1)) + 1);
      classString = classString.concat(classes[randomGroup - 1][classInGroup - 1]);
      if (i !== numberOfClasses - 1) {
        classString = classString.concat(' ');
      }
      classes.splice(randomGroup - 1, 1); // Avoid select same group twice or + (delete group row)
    }
    return classString;
  },
  changeClass: function changeClass() {
    event.target.className = functionalities.generateRandomStyle();
  },
  addEventToWords: function addEventToWords() {
    const allSpan = document.querySelectorAll('span');
    for (let i = 0; i < allSpan.length; i += 1) {
      allSpan[i].addEventListener('click', functionalities.changeClass);
    }
    const wordCounterElement = document.querySelector('#carta-contador');
    wordCounterElement.innerHTML = allSpan.length;
  },
};

window.onload = function () {
  // Elements
  const buttonCreateElement = document.querySelector('#criar-carta');

  // Events
  buttonCreateElement.addEventListener('click', functionalities.verifyAndEdit);
};
