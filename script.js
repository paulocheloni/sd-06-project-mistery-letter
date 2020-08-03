//Declaração das Variaveis
let btnCreateLetter = document.querySelector('#criar-carta');
let inputLetter = document.querySelector('#carta-texto');
let viewLetter = document.querySelector('#carta-gerada');

//Declaracao dos Eventos
btnCreateLetter.addEventListener('click' , createLetter);

//Criação das Funções

function createLetter(){
    let separetedPhrases = inputLetter.value.split(' ');;
    if (inputLetter.value.trim() === '') {
        alert('Por favor, digite o conteúdo da carta.');
    } else {
        for (let j = 0 ; j < separetedPhrases.length ; j += 1){
        let spanText = document.createElement('span');
        spanText.innerText = separetedPhrases[j];
            for (let i = 0 ; i < 4 ; i += 1) {
                spanText.classList.add(randomClassGenerator()[i]);
            }
        viewLetter.appendChild(spanText);
        }            
    }
}

function randomClassGenerator(){
    let styleGroup = ['newspaper' , 'magazine1' , 'magazine2'];
    let sizeGroup = ['medium' , 'big' , 'reallybig'];
    let rotationGroup = ['rotateleft' , 'rotateright'];
    let skewGroup = ['skewleft' , 'skewright'];
    let arrayWithClasses = [3];

    arrayWithClasses[0] = styleGroup[Math.ceil(Math.random()*styleGroup.length)-1]
    arrayWithClasses[1] = sizeGroup[Math.ceil(Math.random()*sizeGroup.length)-1]
    arrayWithClasses[2] = rotationGroup[Math.ceil(Math.random()*rotationGroup.length)-1]
    arrayWithClasses[3] = skewGroup[Math.ceil(Math.random()*skewGroup.length)-1]

    return arrayWithClasses;
}

