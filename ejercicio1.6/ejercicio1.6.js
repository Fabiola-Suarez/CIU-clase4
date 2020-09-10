//boton dinero
var boton = document.querySelector(".dinero")
var imagen = document.querySelector(".dinero2")

boton.addEventListener("click",function(){
    
    imagen.classList.toggle("oculto")
})

imagen.addEventListener("click",function(){
    this.classList.add("oculto")
})
//boton Miami
var boton1 = document.querySelector(".Miami")
var imagen1 = document.querySelector(".Miami2")

boton1.addEventListener("click",function(){
    
    imagen1.classList.toggle("oculto")
})

imagen1.addEventListener("click",function(){
    this.classList.add("oculto")
})
//boton Ricky
var boton2 = document.querySelector(".Ricky")
var imagen2 = document.querySelector(".Ricky2")

boton2.addEventListener("click",function(){
    
    imagen2.classList.toggle("oculto")
})

imagen2.addEventListener("click",function(){
    this.classList.add("oculto")
})
