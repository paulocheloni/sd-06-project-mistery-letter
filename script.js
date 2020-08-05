function addRandomClasses () {
  const classes = ['rotate-right', 'rotate-left', 'medium', 'magazine1' , 'magazine2', 'skewleft', 'skewright', 'big', 'reallybig', 'newspaper']
  const chosenClasses = [];
  const numberOfClassesToAdd = Math.ceil(Math.random()*((classes.length)-1));
  for (i = 0 ; i < numberOfClassesToAdd; i += 1) {
    const randomIndex =  Math.ceil(Math.random()*((classes.length)-1));
    chosenClasses.push(classes[randomIndex]);
    classes.splice(randomIndex,1);
  }
  return chosenClasses.join(' ',' ')
}

function showNumberOfWords (i) {
  const elementCount = document.querySelector('#carta-contador')
  elementCount.innerText = (i);
}

function createElementsByWords (words) {
  for (let i in words) {
    const newElement = document.createElement('span');
    const parentElement = document.getElementById('carta-gerada');
    let chosenClasses = addRandomClasses()
    newElement.classList = chosenClasses;
    newElement.innerText = words[i];
    parentElement.appendChild(newElement);
    showNumberOfWords(words.length);
  }
}

function formatInputText (inputText) {
  phraseUnformated = inputText.split(' ');
  phraseFormated = [];
  for (let i in phraseUnformated ) {
    if (phraseUnformated[i] != '') {
      phraseFormated.push(phraseUnformated[i]);
    }
  }
  if (phraseFormated[0] == null ) {
    return "Por favor, digite o conteúdo da carta."
  }
  return phraseFormated
}

function initButtonEvents () {
  const btnGenerateLetter = document.getElementById('criar-carta');
  btnGenerateLetter.addEventListener('click', (e) => {
  let input = document.getElementById('carta-texto');
  const typedText = formatInputText(input.value);
  createElementsByWords(typedText);
  initSpanEvents();
  });
}

function initSpanEvents () {
  const spansLetter = document.querySelectorAll('span');
  for (let i = 0; i < spansLetter.length; i += 1)
  spansLetter[i].addEventListener('click', (e) => {
    spansLetter[i].classList = addRandomClasses();
  })
}

window.onload = () => {
  initButtonEvents();
}
