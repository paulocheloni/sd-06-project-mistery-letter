const stylesGroup = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const numberOfWords = document.getElementById('carta-contador');

let miniMisteryArray = [];

function generateMiniArray() {
  let numberOfStyles = Math.ceil(Math.random() * 4);
  if (numberOfStyles === 1) {  
    let style1 = Math.floor(Math.random() * 2.7);
    miniMisteryArray.push(stylesGroup[style1]);
  } else if (numberOfStyles === 2) {
    let style1 = Math.floor(Math.random() * 2.7);
    miniMisteryArray.push(stylesGroup[style1]);
    let style2 = Math.floor((Math.random() * 2.7) + 3);
    miniMisteryArray.push(stylesGroup[style2]);
  } else if (numberOfStyles === 3) {
    let style1 = Math.floor(Math.random() * 2.7);
    miniMisteryArray.push(stylesGroup[style1]);
    let style2 = Math.floor((Math.random() * 2.7) + 3);
    miniMisteryArray.push(stylesGroup[style2]);
    let style3 = Math.floor((Math.random() * 1.7) + 6);
    miniMisteryArray.push(stylesGroup[style3]);  
  } else {
    let style1 = Math.floor(Math.random() * 2.7);
    miniMisteryArray.push(stylesGroup[style1]);
    let style2 = Math.floor((Math.random() * 2.7) + 3);
    miniMisteryArray.push(stylesGroup[style2]);
    let style3 = Math.floor((Math.random() * 1.7) + 6);
    miniMisteryArray.push(stylesGroup[style3]);
    let style4 = Math.floor((Math.random() * 1.7) + 8);
    miniMisteryArray.push(stylesGroup[style4]);
  }
}
  
function addStyles(word) {
  generateMiniArray();
  for (let i = 0; i < miniMisteryArray.length; i += 1) {
    word.className += `${miniMisteryArray[i]} `;
  }
  miniMisteryArray = [];
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
