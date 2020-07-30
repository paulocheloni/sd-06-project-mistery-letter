const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotates = ['rotateleft', 'rotateright'];
const skews = ['skewleft', 'skewright'];
const features = [styles, sizes, rotates, skews];

function selectNumberFeatures() {
  let numberOfFeatures = 1;
  while (numberOfFeatures < 2) {
    numberOfFeatures = Math.floor(Math.random() * 5);
  }
  return numberOfFeatures;
}

function selectFeatures(param1) {
  let selectedFeatures = [];
  let number = 0;
  while (number < param1) {
    let pickArrayFeature = Math.floor(Math.random() * 4);
    if (!selectedFeatures.includes(pickArrayFeature)) {
      selectedFeatures.push(pickArrayFeature);
      number += 1;
    }
  }
  return selectedFeatures;
}

function selectFeaturesItems(param1) {
  let selectedFeaturesItems = [];
  for (let item = 0; item < param1.length; item += 1) {
    const randomNumber = Math.floor(Math.random() * features[param1[item]].length);
    selectedFeaturesItems.push(features[param1[item]][randomNumber]);
  }
  return selectedFeaturesItems;
}

function creatingArrayFeatures() {
  const numberFeatures = selectNumberFeatures();
  const arraySelectedFeatures = selectFeatures(numberFeatures);
  const arraySelectedFeaturesItems = selectFeaturesItems(arraySelectedFeatures);
  return arraySelectedFeaturesItems;
}

function cleanText() {
  document.getElementById('carta-gerada').innerText = '';
}

function countCards(param1) {
  string = `esta é uma carta com ${param1.length} palavras`;
  document.getElementById('carta-contador').innerText = string; 
}

function creatingCards() {
  cleanText();
  console.log(document.getElementById('carta-texto').value)
  if (document.getElementById('carta-texto').value.trim() === '') {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    const arrayWords = document.getElementById('carta-texto').value.trim();
    for (let item1 = 0; item1 < arrayWords.split(' ').length; item1 += 1) {
      const styling = creatingArrayFeatures();
      let card = document.createElement('span');
      for (let item2 = 0; item2 < styling.length; item2 += 1) {
        card.classList.add(styling[item2]);
      }
      card.innerText = arrayWords.split(' ')[item1];
      document.getElementById('carta-gerada').insertAdjacentElement('beforeend', card);
      countCards(arrayWords.split(' '));
    }
  }
}

function eraseCardStyle(event) {
  for (let item = 0; item < styles.length; item += 1) {
    event.target.classList.remove(styles[item]);
  }
  for (let item = 0; item < sizes.length; item += 1) {
    event.target.classList.remove(sizes[item]);
  }
  for (let item = 0; item < rotates.length; item += 1) {
    event.target.classList.remove(rotates[item]);
  }
  for (let item = 0; item < skews.length; item += 1) {
    event.target.classList.remove(skews[item]);
  }
}

function addCardStyle(event) {
  eraseCardStyle(event);
  const arrayNewFeatures = creatingArrayFeatures();
  for (let item = 0; item < arrayNewFeatures.length; item += 1) {
    event.target.classList.add(arrayNewFeatures[item]);
  }
}

window.onload = function () {
  document.getElementById('criar-carta').addEventListener('click', creatingCards);
  document.getElementById('carta-gerada').addEventListener('click', addCardStyle);
}
