console.log("Hola mundo");

document.getElementById('boton').onclick=function() {
    console.log("evento click");
    document.getElementById("demo")
}

function mOver(obj) {
    obj.innerHTML = "Gracias"
}

function mOut(obj) {
    obj.innerHTML = "Por ver mi perfil"
}