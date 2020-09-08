
var $h1 = document.querySelectorAll(".resaltador > p")

for(var i = 0; i < $h1.length; i++){
    $h1[i].addEventListener("click",function() {
        //this.classList.add("resaltado")
        $h1.classList.toggle("resaltado")
        
    })
}