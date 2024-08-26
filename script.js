const textArea = document.querySelector(".caja_texto");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar = document.getElementById("boton_encriptador");
const botonDesencriptar = document.getElementById("boton_desencriptar");
const botonCopiar = document.getElementById("boton_copiar");
const placeholders = document.querySelectorAll(".mensaje-placeholder");
const resultado = document.querySelector(".resultado");
const presentacion = document.querySelector(".presentacion");

botonEncriptar.addEventListener("click", boton_encriptador);
botonDesencriptar.addEventListener("click", boton_desencriptador);
botonCopiar.addEventListener("click", boton_copiar);

const patron = /^[a-zñ\s]+$/;

function boton_encriptador() {
    const texto = textArea.value.trim(); 
    if(patron.test(texto)){
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        presentacion.style.display = "none"
        resultado.style.display = "flex";
        textArea.value = "";
    } else {
        alert("Caracteres no validos, intente nuevamente.")
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 

    return stringEncriptada;
}

function boton_desencriptador (){
    const texto = textArea.value; 
    if(patron.test(texto)){
        const textoDesencriptado = desencriptar(texto); // Cambiar a desencriptar
        mensaje.value = textoDesencriptado; // Mostrar el texto desencriptado
        presentacion.style.display = "none"
        resultado.style.display = "flex";
        textArea.value = "";
    } else {
        alert("Caracteres no validos, intente nuevamente.")
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 

    return stringDesencriptada;
}

function boton_copiar(){
    navigator.clipboard.writeText(mensaje.value)
        .then(()=>{
            botonCopiar.innerHTML = "Copiado";
            setTimeout(()=>{
                botonCopiar.innerHTML = "Copiar";
            }, 1000)
        })
}

