function formatInputText (inputText) {
  phraseUnformated = inputText.split(' ');
  phraseFormated = [];
  for (let i in phraseUnformated ) {
    if(phraseUnformated[i] != '') {
      phraseFormated.push(phraseUnformated[i]);
    }
  }
  return phraseFormated
}

function addRandomClass (classes) {
  const randomElement =  Math.ceil(Math.random()*((classes.length)-1))
  const choice = classes[randomElement];
  return choice
}

function createElementsByWords (words) {
  words.forEach((element) => {
    const newElement = document.createElement('span');
    const textContainer = document.getElementById('carta-gerada');
    newElement.classList = `word-generated  ${addRandomClass(['var', 'lar'])}`;
    newElement.innerText = element;
    textContainer.appendChild(newElement);
  });
}

const btnGenerateLetter = document.getElementById('criar-carta');

btnGenerateLetter.addEventListener('click', (e) => {
  const typedText = document.getElementById('carta-texto').value;
  const formatedInput = formatInputText(typedText);
  createElementsByWords(formatedInput);
});

