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
       var estilo = ["newspaper", "magazine1", "magazine2"]
       var tamanho = ["medium", "big", "reallybig"];
       var rotacao = ["rotateleft", "rotateright"];
       var inclinacao = ["skewleft", "skewright"];
       elements[i].classList.add(estilo[Math.floor(Math.random() * 3)])
       elements[i].classList.add(tamanho[Math.floor(Math.random() * 3)])
       elements[i].classList.add(rotacao[Math.floor(Math.random() * 2)])
       elements[i].classList.add(inclinacao[Math.floor(Math.random() * 2)])
    }

    
})

