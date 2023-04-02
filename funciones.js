function validarDatos() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var texto = document.getElementById('mensaje').value;
    var campo1 = ""
    var campo2 = ""
    var campo3 = ""
    var campo4 = ""
    
    if (nombre == "") {
        campo1 = "(Nombre de usuario)"
    }
    if (telefono == ""){
        campo2 = "(Teléfono)"
    }
    if (email == ""){
        campo3 = "(Correo Electrónico)"
    }
    if (texto == "" ){
        campo4 = "(Mensaje)"
    }

    if (campo1 != "" || campo2 != "" || campo3 !=  "" || campo4 != ""){
        alert("Los campos "+campo1+campo2+campo3+campo4+" no deben estar vacíos.")
    }
    else{
        alert("Datos ingresados correctamente.")
    }
}
