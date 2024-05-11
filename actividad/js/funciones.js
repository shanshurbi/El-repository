function validar() {
    event.preventDefault();
    let Nombre = document.getElementById("Nombre").value;
    let rut = document.getElementById("rut").value;
    let mail = document.getElementById("mail").value;
    if (Nombre.length >= 15) {
        if (rut.length >= 10) {
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([gmail|outlook]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)){
                document.getElementById("resultado2").innerHTML = "<div class='alert alert-success' role='alert'>¡Datos ingresados correctamente!</div>";
            } else{
                document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'>¡El email debe ser gmail u outlook!</div>";
            }
        } else {
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡EL rut debe tener al menos 10 caracteres!</div>";
        }
    } else {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'>¡El nombre debe tener al menos 15 caracteres!</div>";
    }
}
/*
function validarmail() {
    event.preventDefault();
    const pattern = /^[a-zA-Z0-9._-]+@(gmail|outlook)\.(com|org|net)$/i;
    let mail = pattern.test(mail);

    if (mail){
        
    }
    else{
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'>¡El correo es exclusivamente gmail u outlook!</div>";
    }
    return mail;
  }
*/
/*
function validarmail() {
    let mail = document.getElementById("mail").value;
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([gmail|outlook]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)){
     alert("La dirección de email " + mail + " es correcta!.");
    } else {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'>¡El email debe ser gmail u outlook!</div>";
    }
  }
*/
  function funciones(){
    validar();
    
  }
