function validar() {
    event.preventDefault();
    let Nombre = document.getElementById("Nombre").value;
    let rut = document.getElementById("rut").value;
    if (Nombre.length >= 15) {
        if (rut.length >= 10) {

        } else {
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡EL rut debe tener al menos 10 caracteres!</div>";
        }
    } else {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡El nombre debe tener al menos 15 caracteres!</div>";
    }
}

function validarmail(mail) {
    const pattern = /^[a-zA-Z0-9._-]+@(gmail|outlook)\.(com|org|net)$/i;
    let mail = pattern.test(mail);

    if (mail){
        
    }
    else{
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡El correo es exclusivamente gmail u outlook!</div>";
    }
    return mail;
  }