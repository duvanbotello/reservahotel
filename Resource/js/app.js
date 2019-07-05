/**
 * CODIGO DE CLIENTES
 */
var cliente = new Cliente();
//creamos una funcion para optener los datos y enviarlos al servidor.
var iniciarSesion = () =>{
    //optenemos los datos del formulario login.
    //se traen los input del formulario con id "email" y "pasword"
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //utilizamos el metodo loginuser de la clase usuario y le pasos el email y el password
    cliente.iniciarSesion(email,password);
}

//utilizando jquery
$().ready(()=>{

});
