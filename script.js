
const functionalities = {
  verifyAndEdit: function verifyAndEdit() {
    const inputTextElement = document.querySelector('#carta-texto');
    const textToManipulate = inputTextElement.value;
    let occurrenceOfWhiteSpaceInARow = 0;
    while (textToManipulate[occurrenceOfWhiteSpaceInARow] === ' ') {
      occurrenceOfWhiteSpaceInARow +=1 ;
    }
    if (occurrenceOfWhiteSpaceInARow !== textToManipulate.length && textToManipulate.value !== '') {
    functionalities.editLetterStyle(textToManipulate);
    } else {
      document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta!';
    }
  },
  editLetterStyle: function editStyle(textToManipulate) {
    const letterElement = document.querySelector('#carta-gerada');
    letterElement.innerHTML = '';
    let i = 0;
    let word = '';
    let wordCounter = 0;
    while(i < textToManipulate.length) {
      word += textToManipulate[i].replace(' ','');
      if (textToManipulate[i] === ' ' || i === textToManipulate.length-1) {
        const spanElement = document.createElement('span');
        spanElement.className = functionalities.generateRandomStyle();
        spanElement.innerHTML = word;
        letterElement.appendChild(spanElement);
        if (i !== textToManipulate.length-1) {
          letterElement.innerHTML = letterElement.innerHTML.concat(' ');
        }
        word = '';
        wordCounter += 1;
        spanElement.addEventListener('click' , functionalities.changeClass);
      }
      i += 1;
    }
    const wordCounterElement = document.querySelector('#carta-contador');
    //wordCounterElement.innerHTML = (('esta é uma carta com ').concat(wordCounter)).concat(' palavras');
    wordCounterElement.innerHTML = wordCounter;
  },
  generateRandomStyle: function generateRandomStyle () {
    let classes = [
      ['newspaper', 'magazine1', 'magazine2'], // Style Group
      ['medium', 'big', 'reallybig'], // Size Group
      ['rotateleft', 'rotateright'], // Rotation Group
      ['skewleft', 'skewright'], // Inclination Group
    ];
    const numberOfClasses = Math.round(Math.random() * (4 - 2) + 2); // It can be 2, 3 or 4
    let classString = '';
    for (let i = 0; i < numberOfClasses; i += 1) {
      const randomGroup = Math.round(Math.random() * (4-i - 1) + 1);
      const classInsideGroup = Math.round(Math.random() * (classes[randomGroup-1].length-1) +1);
      classString = classString.concat(classes[randomGroup-1][classInsideGroup-1]);
      if (i !== numberOfClasses-1) {
        classString = classString.concat(' ');
      }
      classes.splice(randomGroup-1, 1); // Avoid error selecting a same group twice or more - delete group row
    }
    return classString;
  },
  changeClass: function changeClass() {
    event.target.className = functionalities.generateRandomStyle();
  },
};

window.onload = function () {
  // Elements
  const buttonCreateElement = document.querySelector('#criar-carta');

  // Events
buttonCreateElement.addEventListener('click', functionalities.verifyAndEdit);
};