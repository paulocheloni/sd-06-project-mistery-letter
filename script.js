const createLetterButton = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
const letterGenerated = document.getElementById('carta-gerada');
const letterCounter = document.getElementById('carta-contador');

function randomStyleGroup() {
  const class0 = 0;
  const class1 = 1;
  const randomClass = Math.round(Math.random() * 3);
  if (class0 === randomClass) {
    return 'newspaper';
  } else if (class1 === randomClass) {
    return 'magazine1';
  }
  return 'magazine2';
}

function randomSizeGroup() {
  const class0 = 0;
  const class1 = 1;
  const randomClass = Math.round(Math.random() * 3);
  if (class0 === randomClass) {
    return 'medium';
  } else if (class1 === randomClass) {
    return 'big';
  }
  return 'reallybig';
}

function randomRotationGroup() {
  const class0 = 0;
  const randomClass = Math.round(Math.random() * 2);
  if (class0 === randomClass) {
    return 'rotateleft';
  }
  return 'rotateright';
}

function randomSkewGroup() {
  const class0 = 0;
  const randomClass = Math.round(Math.random() * 2);
  if (class0 === randomClass) {
    return 'skewleft';
  }
  return 'skewright';
}

createLetterButton.addEventListener('click', function () {
  letterGenerated.innerHTML = '';
  letterCounter.innerHTML = '';

  const spacesArray = inputText.value;
  let isOnlySpaces = false;
  for (let i = 0; i < spacesArray.length; i += 1) {
    if (spacesArray[i] === ' ') {
      isOnlySpaces = true;
    } else {
      isOnlySpaces = false;
    }
  }

  if (inputText.value === '' || isOnlySpaces) {
    letterGenerated.innerHTML = 'por favor, digite o conteúdo da carta!';
  } else {
    const stringArray = inputText.value.split(' ');
    const count = stringArray.length;
    letterCounter.innerHTML = count;
    for (let i = 0; i < stringArray.length; i += 1) {
      const spanTag = document.createElement('span');
      const space = ' ';
      spanTag.innerHTML = stringArray[i];
      spanTag.className += randomStyleGroup();
      spanTag.className += space + randomSizeGroup();
      spanTag.className += space + randomRotationGroup();
      spanTag.className += space + randomSkewGroup();
      letterGenerated.appendChild(spanTag);
    }

    // console.log(letterGenerated);
  }
});
