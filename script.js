const stylesGroup = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const numberOfWords = document.getElementById('carta-contador');

function addStyle1(word) {
  const style1 = Math.floor(Math.random() * 2.7);
  word.className += `${stylesGroup[style1]} `;
}

function addStyle2(word) {
  const style2 = Math.floor((Math.random() * 2.7) + 3);
  word.className += `${stylesGroup[style2]} `;
}

function addStyle3(word) {
  const style3 = Math.floor((Math.random() * 1.7) + 6);
  word.className += `${stylesGroup[style3]} `;
}

function addStyle4(word) {
  const style4 = Math.floor((Math.random() * 1.7) + 8);
  word.className = `${stylesGroup[style4]} `;
}

function addStyles(word) {
  const numberOfStyles = Math.floor((Math.random() * 3.7) + 1);
  if (numberOfStyles === 1) {
    addStyle1(word);
  } else if (numberOfStyles === 2) {
    addStyle1(word);
    addStyle2(word);
  } else if (numberOfStyles === 3) {
    addStyle1(word);
    addStyle2(word);
    addStyle3(word);
  } else {
    addStyle1(word);
    addStyle2(word);
    addStyle3(word);
    addStyle4(word);
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
