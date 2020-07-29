
const functionalities = {
  editLetterStyle: function editStyle() {
    const inputTextElement = document.querySelector('#carta-texto');
    const letterElement = document.querySelector('#carta-gerada');
    const textToManipulate = inputTextElement.value
    console.log(textToManipulate.length)
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
  }
};

window.onload = function () {
  // Elements
  const buttonCreateElement = document.querySelector('#criar-carta');

  // Events
buttonCreateElement.addEventListener('click', functionalities.editLetterStyle);
};