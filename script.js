var cartaTexto = document.querySelector("#carta-texto"); 
var criarCarta = document.querySelector("#criar-carta");
var cartaGerada = document.querySelector("#carta-gerada");


criarCarta.addEventListener("click", function(){
    if(cartaTexto.value == "" || cartaTexto.value == " "){
        alert("Por favor, digite o conteúdo da carta.")
    }
    var arrayText = cartaTexto.value.split(" ");
    for(let i = 0; i < arrayText.length; i++){
        var span = document.createElement("span")
        span.innerText = arrayText[i]
        cartaGerada.appendChild(span)
    }

    var elements = document.querySelectorAll("span")
    for(let i = 0; i < elements.length; i++){
       // Math.floor(Math.random() * 6)
       var list = ["newspaper magazine1 magazine2",
       "medium big reallybig",
       "rotateleft rotateright",
       "skewleft skewright"
    ]
       elements[i].className = list[Math.floor(Math.random() * 3)]
    }

    var classe1 = "newspaper magazine1 magazine2"
    var classe2 = "medium big reallybig"
    var classe3 = "rotateleft rotateright"
    var classe4 = "skewleft skewright"
})

