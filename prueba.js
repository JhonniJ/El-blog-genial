
var caja =document.getElementById("texto");
var boton =document.getElementById("boton");
boton.addEventListener("click", enviar);
console.log("el boton" +boton +"la caja"+ caja);
function enviar(){
    alert("NO teman porque ya estoy aquí"+ caja.value);
};

