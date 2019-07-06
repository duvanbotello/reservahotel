/**
 * CODIGO DE CLIENTES
 */
var cliente = new Cliente();
var registrar2 = new Registrar();
//creamos una funcion para optener los datos y enviarlos al servidor.
var iniciarSesion = () =>{
    //optenemos los datos del formulario login.
    //se traen los input del formulario con id "email" y "pasword"
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //utilizamos el metodo loginuser de la clase usuario y le pasos el email y el password
    cliente.iniciarSesion(email,password);
}

var vistraRegistrar = () =>{
  registrar2.vistraRegistrar();
}


//utilizando jquery
$().ready(()=>{
  //capturamos los datos que estamos pasando por la URL del navegador
  let URLactual = window.location.pathname;
  //llamamos a metodo userData de Usuarios.js
  cliente.userData(URLactual);
});
