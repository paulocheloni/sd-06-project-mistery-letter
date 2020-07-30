const createLetterButton = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
const letterGenerated = document.getElementById('carta-gerada');

function randomStyleGroup() {
  const class0 = 0;
  const class1 = 1;
  const randomClass = Math.round(Math.random() * 3);
  if (class0 === randomClass) {
    return 'newspaper';
  } else if (class1 === randomClass) {
    return 'magazine1';
  } else {
    return 'magazine2';
  }
}

function randomSizeGroup() {
  const class0 = 0;
  const class1 = 1;
  const randomClass = Math.round(Math.random() * 3);
  if (class0 === randomClass) {
    return 'medium';
  } else if (class1 === randomClass) {
    return 'big';
  } else {
    return 'reallybig';
  }
}

function randomRotationGroup() {
  const class0 = 0;
  const randomClass = Math.round(Math.random() * 2);
  if (class0 === randomClass) {
    return 'rotateleft';
  } else {
    return 'rotateright';
  }
}

function randomSkewGroup() {
  const class0 = 0;
  const randomClass = Math.round(Math.random() * 2);
  if (class0 === randomClass) {
    return 'skewleft';
  } else {
    return 'skewright';
  }
}

createLetterButton.addEventListener('click', function () {
  letterGenerated.innerHTML = '';
  const stringArray = inputText.value.split(' ');
  for (let i = 0; i < stringArray.length; i += 1) {
    const spanTag = document.createElement('span');
    const space = ' ';
    if (i !== stringArray.length - 1) {
      spanTag.innerHTML = stringArray[i] + space;
      spanTag.className += randomStyleGroup();
      spanTag.className += space + randomSizeGroup();
      spanTag.className += space + randomRotationGroup();
      spanTag.className += space + randomSkewGroup();
    } else {
      spanTag.innerHTML = stringArray[i];
      spanTag.className += randomStyleGroup();
      spanTag.className += space + randomSizeGroup();
      spanTag.className += space + randomRotationGroup();
      spanTag.className += space + randomSkewGroup();
    }
    letterGenerated.appendChild(spanTag);
  }
  console.log(letterGenerated);
});
