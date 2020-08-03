const stylesGroup = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const numberOfWords = document.getElementById('carta-contador');

function addStyles(word) {

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
    let cont = 0;
    for (let i = 0; i < misteryArray.length; i += 1) {
      if (misteryArray[i] !== '') {  
        const misteryWord = document.createElement('span');
        misteryWord.innerText = misteryArray[i];
        addStyles(misteryWord);
        document.getElementById('carta-gerada').appendChild(misteryWord);
        cont += 1;
      }
    }
    numberOfWords.innerText = `Total de Palavras : ${cont}`;
  } else {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
