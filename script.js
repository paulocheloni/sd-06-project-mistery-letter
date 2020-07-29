
const functionalities = {
  verifyAndEdit: function verifyAndEdit() {
    const inputTextElement = document.querySelector('#carta-texto');
    const textToManipulate = inputTextElement.value;
    let permissionToContinue = 1;
    let occurrenceOfWhiteSpaceInARow = 0;
    while (textToManipulate[occurrenceOfWhiteSpaceInARow] === ' ') {
      occurrenceOfWhiteSpaceInARow +=1 ;
    }
    if (occurrenceOfWhiteSpaceInARow !== textToManipulate.length && textToManipulate.value !== '') {
    functionalities.editLetterStyle(textToManipulate);
    } else {
      document.querySelector('#carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  },
  editLetterStyle: function editStyle(textToManipulate) {
    const letterElement = document.querySelector('#carta-gerada');
    letterElement.innerHTML = '';
    let i = 0;
    let word = '';
    while(i < textToManipulate.length) {
      word += textToManipulate[i];
      if (textToManipulate[i] === ' ' || i === textToManipulate.length-1) {
        const spanElement = document.createElement('span');
        spanElement.innerHTML = word;
        letterElement.appendChild(spanElement);
        word = '';
      }
      i += 1;
    }
  },
  generateRandomStyle: function generateRandomStyle () {
    const numberOfClasses = Math.random() * (4 - 2)
  }
};

window.onload = function () {
  // Elements
  const buttonCreateElement = document.querySelector('#criar-carta');

  // Events
buttonCreateElement.addEventListener('click', functionalities.verifyAndEdit);
};