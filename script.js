const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotate = ['rotateleft', 'rotateright'];
const groupSkew = ['skewleft', 'skewright'];
const numberOfWords = document.getElementById('carta-contador');

function addOneStyle(word) {
  const style1 = Math.floor(Math.random() * 3);
  word.classList.add(groupStyle[style1]);
}

function addTwoStyles(word) {
  const style1 = Math.floor(Math.random() * 3);
  word.classList.add(groupStyle[style1]);
  const style2 = Math.floor(Math.random() * 2);
  word.classList.add(groupSize[style2]);
}

function addThreeStyles(word) {
  const style1 = Math.floor(Math.random() * 3);
  word.classList.add(groupStyle[style1]);
  const style2 = Math.floor(Math.random() * 3);
  word.classList.add(groupSize[style2]);
  const style3 = Math.floor(Math.random() * 2);
  word.classList.add(groupRotate[style3]);
}

function addFourStyles(word) {
  const style1 = Math.floor(Math.random() * 3);
  word.classList.add(groupStyle[style1]);
  const style2 = Math.floor(Math.random() * 3);
  word.classList.add(groupSize[style2]);
  const style3 = Math.floor(Math.random() * 2);
  word.classList.add(groupRotate[style3]);
  const style4 = Math.floor(Math.random() * 2);
  word.classList.add(groupSkew[style4]);
}

function addStyles(word) {
  const numberOfStyles = Math.ceil(Math.random() * 4);
  if (numberOfStyles === 1) {
    addOneStyle(word); 
  } else if (numberOfStyles === 2) {
    addTwoStyles(word);
  } else if (numberOfStyles === 3) {
    addThreeStyles(word);
  } else {
    addFourStyles(word);
  }
}

document.getElementById('criar-carta').addEventListener('click', function () {
  document.getElementById('carta-gerada').innerText = '';
  let cont = 0;
  for (let i = 0; i < document.getElementById('carta-texto').value.length; i += 1) {
    if (document.getElementById('carta-texto').value[i] !== ' ') {
      cont += 1;
    }
  }
  if (document.getElementById('carta-texto').value !== '' && cont > 0) {
    letterArray = [];
    const misteryArray = document.getElementById('carta-texto').value.split(' ');
    let contWords = 0;
    for (let i = 0; i < misteryArray.length; i += 1) {
      if (misteryArray[i] !== '') {
        const misteryWord = document.createElement('span');
        misteryWord.innerText = misteryArray[i];
        addStyles(misteryWord);
        document.getElementById('carta-gerada').appendChild(misteryWord);
        contWords += 1;
      }
    }
    numberOfWords.innerText = contWords;
  } else {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
