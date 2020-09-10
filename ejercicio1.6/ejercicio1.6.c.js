var $borrar = document.querySelector(".salir")
var $boton = document.querySelector("button")
var $texto = document.querySelector("input")
var $body = document.querySelector("body")

$texto.addEventListener("keydown",function(e){
    this.textContent = this.value + String.fromCharCode(e.keyCode)
})

$boton.addEventListener("click",function(){
    $body.style.backgroundColor = $texto.textContent
})

$borrar.addEventListener("click",function(){
    $body.style.backgroundColor  = "White"
})