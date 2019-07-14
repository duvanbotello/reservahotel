/**
 * CODIGO DE CLIENTES
 */
var cliente = new Cliente();
var registrar2 = new Registrar();
var reserva = new Reserva();
//creamos una funcion para optener los datos y enviarlos al servidor.
var iniciarSesion = () => {
  //optenemos los datos del formulario login.
  //se traen los input del formulario con id "email" y "pasword"
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //utilizamos el metodo loginuser de la clase usuario y le pasos el email y el password
  cliente.iniciarSesion(email, password);
}

var getHabita = () => {
  reserva.getHabitaciones();
}



var registrar = () => {
  var nombre = document.getElementById("c_nombre").value;
  var apellido = document.getElementById("c_apellido").value;
  var telefono = document.getElementById("c_telefono").value;
  var direccion = document.getElementById("c_direccion").value;
  var tipodoc = document.getElementById("TipoDocumento").value;
  var documento = document.getElementById("c_documento").value;
  var usuario = document.getElementById("c_usuario").value;
  var correo = document.getElementById("c_correo").value;
  var contrasena1 = document.getElementById("c_contrasena1").value;
  var contrasena2 = document.getElementById("c_contrasena2").value;
  registrar2.registrar(nombre, apellido, telefono, direccion,
    tipodoc, documento, usuario, correo, contrasena1, contrasena2);

}

var sessionClose = () => {
  cliente.sessionCLose();
}

var prueba = (this1) => {
  var valores = $(this1).parents("tr").find("td")[0].innerHTML;
  var habitacion = document.getElementById("idhabitacion");
  habitacion.value = valores;
  
}

var vistraRegistrar = () => {
  registrar2.vistraRegistrar();
}

var alerta1 = () => {
  var p1 = document.getElementById("c_contrasena1").value;
  var p2 = document.getElementById("c_contrasena2").value;
  registrar2.verificandopasswrod(p1, p2);
}

var sololetras = () => {
  var p1 = document.getElementById("c_contrasena1").value;
  var p2 = document.getElementById("c_contrasena2").value;
  registrar2.verificandopasswrod(p1, p2);
}





//utilizando jquery
$().ready(() => {
  //capturamos los datos que estamos pasando por la URL del navegador
  let URLactual = window.location.pathname;
  let URLactual2 = window.location;
  //llamamos a metodo userData de Usuarios.js
  cliente.userData(URLactual);
  //cargando SELECT HTML
  if (URLactual2 == URL + "Registrar/registrar") {
    registrar2.getRoles();
  }



});
