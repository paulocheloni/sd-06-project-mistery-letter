function formatInputText (inputText) {
  phraseUnformated = inputText.split(' ');
  phraseFormated = [];
    for (let i in phraseUnformated ) {
      if (phraseUnformated[i] != '') {
        phraseFormated.push(phraseUnformated[i]);
      }
    }
    if (phraseFormated[0] == null ) {
      return alert('Por favor, digite o conteúdo da carta.')
    }
    return phraseFormated
}

function addRandomClasses () {
  const classes = ['rotate-right', 'rotate-left', 'medium', 'magazine1' , 'magazine2', 'skewleft', 'skewright', 'big', 'reallybig', 'newspaper']
  const choices = [];
  const numberOfClassesToAdd = Math.ceil(Math.random()*((classes.length)-1));
  for (i = 0 ; i < numberOfClassesToAdd; i += 1) {
    const randomIndex =  Math.ceil(Math.random()*((classes.length)-1));
    choices.push(classes[randomIndex]);
    classes.splice(randomIndex,1);
  }
  return choices.join(' ',' ')
}

function createElementsByWords (words) {

  words.forEach((element) => {
    const newElement = document.createElement('span');
    const textContainer = document.getElementById('carta-gerada');
    let choices = addRandomClasses()
    newElement.classList = choices;
    newElement.innerText = element;
    textContainer.appendChild(newElement);
  });
}

function initButtonEvents () {
  const btnGenerateLetter = document.getElementById('criar-carta');
  btnGenerateLetter.addEventListener('click', (e) => {
  let typedText = document.getElementById('carta-texto');
  const formatedInput = formatInputText(typedText.value);
  createElementsByWords(formatedInput);
  typedText.value = "";
  });
}

window.onload = () => {
  initButtonEvents();
}




