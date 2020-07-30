const styles = [`newspaper`, `magazine1`, `magazine2`];
const sizes = [`medium`, `big`, `reallybig`];
const rotates = [`rotateleft`, `rotateright`];
const skews = [`skewleft`, `skewright`];
const features = [styles, sizes, rotates, skews];

function selectNumberFeatures() {
    let numberOfFeatures = 1;
    while (numberOfFeatures < 2) {
        numberOfFeatures = Math.floor(Math.random() * 4);
    }
    console.log('selectNumberFeatures:', numberOfFeatures);
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
    console.log(selectedFeatures)
    return selectedFeatures;
}

function selectFeaturesItems(param1) {
    let selectedFeaturesItems = [];
    for (item = 0; item < param1.length; item += 1) {
        const randomNumber = Math.floor(Math.random() * features[param1[item]].length)
        selectedFeaturesItems.push(features[param1[item]][randomNumber]);
    }
    return selectedFeaturesItems;
}

function criarCartas() {
    let numberFeatures = selectNumberFeatures();
    let arraySelectedFeatures = selectFeatures(numberFeatures);
    let arraySelectedFeaturesItems = selectFeaturesItems(arraySelectedFeatures);
    console.log(arraySelectedFeaturesItems)
}

window.onload = function () {
    document.getElementById('criar-carta').addEventListener('click', criarCartas);
}