var $body = document.querySelector("body")
var imagen = document.querySelector("img")

$body.addEventListener("mouseup",function(infoEvento){

    imagen.style.top = infoEvento.clientY + "px" 
    imagen.style.left = infoEvento.clientX + "px"
})

// magic div
var $div = document.querySelector("#magic")
var $imagen1 = document.querySelector(".imagen1")

$div.addEventListener("mouseenter",function(){
    $imagen1.style.display = "none"
})
$div.addEventListener("mouseout",function(){

    $imagen1.style.display = "block"
  
})

