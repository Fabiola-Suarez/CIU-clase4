var boton = document.querySelector("button")
var texto = document.querySelector("p")

boton.addEventListener("click", function () {
    texto.textContent = "BEEP" 
    texto.insertAdjacentHTML("beforeend","Reto finalizado")
    boton.classList.toggle("color") 
})

/*var seEjecutaEnEvento = function () {
    texto.textContent = "BEEP" 
    texto.insertAdjacentHTML("beforeend","Reto finalizado")
    boton.classList.toggle("color")
}
boton.addEventListener("click",seEjecutaEnEvento)*/


