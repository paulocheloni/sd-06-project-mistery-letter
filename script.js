const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotate = ['rotateleft', 'rotateright'];
const groupSkew = ['skewleft', 'skewright'];
const groupAll = [groupStyle, groupSize, groupRotate, groupSkew];

function addStyle(word) {
  let newNumber = Math.floor(Math.random() * 4);
  for (let i = 0; i <= newNumber; i += 1) {
    let addClass = Math.floor((Math.random() * groupAll[i].length) + 1);
    if (i === newNumber) {
      word.className += groupAll[i][addClass];
    } else {
      word.className += `${groupAll[i][addClass]} `;
    }
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
    for (let i = 0; i < misteryArray.length; i += 1) {
      const misteryWord = document.createElement('span');
      misteryWord.innerText = misteryArray[i];
      addStyle(misteryWord);
      document.getElementById('carta-gerada').appendChild(misteryWord);
    }
  } else {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
