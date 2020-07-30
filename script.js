document.getElementById('criar-carta').addEventListener('click', function () {
  const misteryArray = document.getElementById('carta-texto').value.split(' ');
  for (let i = 0; i < misteryArray.length; i += 1) {
    const misteryWord = document.createElement('span');
    misteryWord.innerText = misteryArray[i];
    document.getElementById('carta-gerada').appendChild(misteryWord);
  }
});
