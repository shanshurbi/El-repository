function validar() {
    event.preventDefault();
    let Nombre = document.getElementById("Nombre").value;
    let rut = document.getElementById("rut").value;
    if (Nombre.length >= 15) {
        if (rut.length >= 10) {

        } else {
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡La contraseña debe tener al menos 10 caracteres!</div>";
        }
    } else {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡El nombre de usuario debe tener al menos 15 caracteres!</div>";
    }
}