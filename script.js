const makeLetterButton = document.querySelector('#criar-carta');

let inputTextLetter = document.querySelector('#carta-texto');

let output = document.querySelector('#carta-gerada');

function addStyle (word){
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 1:
      word.classList.add('newspaper');
      break;
    case 2:
      word.classList.add('magazine1');
      break;
    case 0:
      word.classList.add('magazine2');
      break;
  }
}

function addSize (word){
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 1:
      word.classList.add('medium');
      break;
    case 2:
      word.classList.add('big');
      break;
    case 0:
      word.classList.add('reallybig');
      break;
  }
}

function addRotation (word){
  const num = Math.floor(Math.random() * 4);
  switch (num) {
    case 1:
      word.classList.add('rotateleft');
      break;
    case 0:
      word.classList.add('rotateright');
      break;
    case 2:
      word.classList.add('skewleft');
      break;
    case 3:
        word.classList.add('skewright');
        break;
  }
}

function addIncline (word){
  const num = Math.floor(Math.random() * 2);
  switch (num) {
    case 1:
      word.classList.add('skewleft');
      break;
    case 0:
      word.classList.add('skewright');
      break;
  }
}

function addClasses (word) {
  addStyle(word);
  addSize(word);
  addRotation(word);
  //addIncline(word);
}

makeLetterButton.addEventListener('click', function(){
  const textLetter = inputTextLetter.value;
  if (textLetter.length === 0 || !textLetter.trim()){
    output.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }else {
    const arrayOfWords = textLetter.split(' ');
    for (let i = 0 ; i < arrayOfWords.length ; i += 1){
      const word = document.createElement('span');
      addClasses(word);
      word.innerHTML = arrayOfWords[i];
      output.appendChild(word);
    }
  }
})



