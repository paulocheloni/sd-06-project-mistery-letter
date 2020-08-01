document.getElementById('criar-carta').addEventListener('click', function () {
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
      document.getElementById('carta-gerada').appendChild(misteryWord);
    } 
  } else {
      alert('Por favor, digite o conteúdo da carta.');
    }
});
