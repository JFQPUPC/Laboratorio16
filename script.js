function mostrarImagen(event) {
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
}

function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let contrasena = document.getElementById('contrasena').value.trim();
    let imagen = document.getElementById('imagen').files[0];

    if (!nombre) {
        alert("Por favor, completa el campo de nombre.");
        return;
    }

    if (!correo) {
        alert("Por favor, completa el campo de correo electrónico.");
        return;
    }

    if (!contrasena) {
        alert("Por favor, completa el campo de contraseña.");
        return;
    }

    if (!imagen) {
        alert("Por favor, sube una imagen de perfil.");
        return;
    }

    if (!['image/jpeg', 'image/png'].includes(imagen.type)) {
        alert("El formato de la imagen debe ser JPG o PNG.");
        return;
    }

    alert("Formulario enviado correctamente.");
    document.getElementById("registro-form").reset();
    document.getElementById('ver-imagen').src = "";
}
