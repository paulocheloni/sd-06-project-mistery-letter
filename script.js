const makeLetterButton = document.querySelector('#criar-carta');

let inputTextLetter = document.querySelector('#carta-texto');

let output = document.querySelector('#carta-gerada');

makeLetterButton.addEventListener('click', function(){
  const textLetter = inputTextLetter.value;
  const arrayOfWords = textLetter.split(' ');
  for (let i = 0 ; i < arrayOfWords.length ; i += 1){
    const word = document.createElement('span');
    word.innerHTML = arrayOfWords[i];
    output.appendChild(word);
  }
  //console.log(arrayOfWords);
})



// let teste = "Jederson Carvalho Macedo";
// let splited = teste.split(' ');
// console.log(splited);