function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase()
    var textoEncriptado = frase.replaceAll(/e/img, "enter")
    .replaceAll(/o/img, "ober")
    .replaceAll(/i/img, "imes")
    .replaceAll(/a/img, "ai")
    .replaceAll(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase()
    var textoEncriptado = frase.replaceAll(/enter/img, "e")
    .replaceAll(/ober/img, "o")
    .replaceAll(/imes/img, "i")
    .replaceAll(/ai/img, "a")
    .replaceAll(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
