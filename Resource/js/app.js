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

var sessionClose = () =>{
  alert("salir");
  cliente.sessionCLose();
}

var vistraRegistrar = () =>{
  registrar2.vistraRegistrar();
  registrar2.getRoles();
}

var restablecerRegistro = () =>{
  registrar2.getRoles();
}




//utilizando jquery
$().ready(()=>{
  //capturamos los datos que estamos pasando por la URL del navegador
  let URLactual = window.location.pathname;
  let URLactual2 = window.location;
  //llamamos a metodo userData de Usuarios.js
  cliente.userData(URLactual);
  //cargando SELECT HTML
  if(URLactual2 == URL + "Registrar/registrar"){
    registrar2.getRoles();
  }
});
