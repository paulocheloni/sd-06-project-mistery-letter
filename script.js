const stylesGroup = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function addStyle(word) {
  const stylesNumber = Math.ceil(Math.random() * 4) + 1;
  let groupStyle = stylesGroup.slice(0, 10);
  for (let i = 1; i <= stylesNumber; i += 1) {
    const addStyle = Math.ceil(Math.random() * groupStyle.length);
    word.className += `${groupStyle[addStyle]} `;
    if (groupStyle[addStyle] === 'newspaper' || groupStyle[addStyle] === 'magazine1' || groupStyle[addStyle] === 'magazine2') {
      groupStyle.splice(groupStyle.indexOf('newspaper'),3);
    } else if (groupStyle[addStyle] === 'medium' || groupStyle[addStyle] === 'big' || groupStyle[addStyle] === 'reallybig') {
      groupStyle.splice(groupStyle.indexOf('medium', 3));
    } else if (groupStyle[addStyle] === 'rotateleft' || groupStyle[addStyle] === 'rotateright') {
      groupStyle.splice(groupStyle.indexOf('rotateleft', 2));
    } else {
      groupStyle.splice(groupStyle.indexOf('skewlef', 2));
    }
  }
  groupStyle = stylesGroup.slice(0, 10);
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
