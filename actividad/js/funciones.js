function validar(){
    let user = document.getElementById("Nombre").value;
    let pass = document.getElementById("rut").value;
    if(String(Nombre).length>=15){
        if(String(rut).length>=10){

        }else{
            document.getElementById("resultado").innerHTML = <div class="alert alert-danger" role="alert" > Asi no </div>
        }
    }else{
        document.getElementById("resultado").innerHTML = <div class="alert alert-danger" role="alert" > Asi no </div>
    }
}