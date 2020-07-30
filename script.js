var cartaTexto = document.querySelector("#carta-texto"); 
var criarCarta = document.querySelector("#criar-carta");
var cartaGerada = document.querySelector("#carta-gerada");


criarCarta.addEventListener("click", function(){
    if(cartaTexto.value == "" || cartaTexto.value == " "){
        alert("Por favor, digite o conteúdo da carta.")
    }
    var arrayText = cartaTexto.value.split(" ");
    console.log( arrayText)
    for(let i = 0; i < arrayText.length; i++){
        var span = document.createElement("span")
        span.innerText = arrayText[i]
        cartaGerada.appendChild(span)
    }

    var elements = document.querySelectorAll("span")
    elements[Math.floor(Math.random() * 6)].className = "newspaper magazine1 magazine2"
    elements[Math.floor(Math.random() * 6)].className = "medium big reallybig"
    elements[Math.floor(Math.random() * 6)].className = "rotateleft rotateright"
    elements[Math.floor(Math.random() * 6)].className = "skewleft skewright"
})

