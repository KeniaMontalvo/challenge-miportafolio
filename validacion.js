//Haz tú validación en javascript acá
const form = document.getElementById("form");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("topic");
const mensaje = document.getElementById("mensagem");
const botonEnviar = document.getElementById("enviar-btn");

const advertenciaNombre = document.getElementById("advertenciaNombre");
const advertenciaEmail = document.getElementById("advertenciaEmail");
const advertenciaAsunto = document.getElementById("advertenciaAsunto");
const advertenciaMensaje = document.getElementById("advertenciaMensaje");
const advertenciaGeneral = document.getElementById("advertenciaGeneral");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Restablecer los mensajes de advertencia
    resetearMensajes();

    let mensajes = [];

    if (nombre.value.length < 2) {
        mensajes.push("El nombre no es válido");
        mostrarAdvertencia(advertenciaNombre, "El nombre no es válido");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo.value)) {
        mensajes.push("El correo electrónico no es válido");
        mostrarAdvertencia(advertenciaEmail, "El correo electrónico no es válido");
    }
    if (asunto.value.length < 2) {
        mensajes.push("El asunto no es válido");
        mostrarAdvertencia(advertenciaAsunto, "El asunto no es válido");
    }
    if (mensaje.value.length < 4) {
        mensajes.push("El mensaje no es válido");
        mostrarAdvertencia(advertenciaMensaje, "El mensaje no es válido");
    }
    else {
        advertenciaGeneral.innerHTML = "¡Tu mensaje se ha enviado!";
    }
});

function resetearMensajes() {
    advertenciaNombre.innerHTML = "";
    advertenciaEmail.innerHTML = "";
    advertenciaAsunto.innerHTML = "";
    advertenciaMensaje.innerHTML = "";
    advertenciaGeneral.innerHTML = "";
}

function mostrarAdvertencia(elemento, mensaje) {
    elemento.innerHTML = mensaje;
}
