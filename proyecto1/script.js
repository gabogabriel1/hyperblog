alert("Estamos conectados")

const boton = document.getElementById("boton")
boton.addEventListener("click", hablar)

let mensaje

function hablar(){
    mensaje = "Lo que quiero decir nuevamente"
    alert(mensaje)
}