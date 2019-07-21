/**
 * CODIGO DE CLIENTES
 */
var cliente = new Cliente();
var registrar2 = new Registrar();
var reserva = new Reserva();
var gadmin = new Gadmin();
//creamos una funcion para optener los datos y enviarlos al servidor.
var iniciarSesion = () => {
  //optenemos los datos del formulario login.
  //se traen los input del formulario con id "email" y "pasword"
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //utilizamos el metodo loginuser de la clase usuario y le pasos el email y el password
  cliente.iniciarSesion(email, password);
}

var iniciarSesionadmin = () => {

  var usuario = document.getElementById("usuarioAdmin").value;
  var password = document.getElementById("passwordAdmin").value;
  cliente.iniciarSesionAdmin(usuario, password);
}

var getHabita = () => {
  reserva.getHabitaciones();
}

var Confirmareserva = () => {
  let total = document.getElementById("total");
  let descuento = document.getElementById("descuento");
  let totalapagar = document.getElementById("totalapagar");
  let dias = document.getElementById("numeroDiasReserva");
  let fechainicio = document.getElementById("fechainicio");
  let fechafin = document.getElementById("fechafin");
  let codigoHabitacion = document.getElementById("idhabitacion");
  let precioHabitacion = document.getElementById("precioHabitacion");
  reserva.Confirmareserva(fechainicio, fechafin, codigoHabitacion, precioHabitacion, dias,total,descuento,totalapagar);
}

var HacerReserva = () => {
  let total = document.getElementById("total").value;
  let descuento = document.getElementById("descuento").value;
  let totalapagar = document.getElementById("totalapagar").value;
  let dias = document.getElementById("numeroDiasReserva").value;
  let fechainicio = document.getElementById("fechainicio").value;
  let fechafin = document.getElementById("fechafin").value;
  let codigoHabitacion = document.getElementById("idhabitacion").value;
  reserva.HacerReserva(fechainicio, fechafin, codigoHabitacion, dias,total,descuento,totalapagar);
}

var Misreservas = () => {
  reserva.getMisReservas();
}

var CargarTipoCliente = () => {
  gadmin.getTipoCliente();
}

var cambiarPrecioH = () =>{
  let select = document.getElementById("tipohabitaciones");
  let nuevoprecio = document.getElementById("newprecio");
  gadmin.modificarPrecio(select,nuevoprecio);
}
var cambiarDescuentoC = () =>{
  let select = document.getElementById("tipocliente");
  let nuevodescuento = document.getElementById("newdescuento");
  gadmin.modificarDescuento(select,nuevodescuento);
}

var calcularGanancias = () =>{
  let select = document.getElementById("mesGanancias");
  let ganancias = document.getElementById("ganancias");
  gadmin.calcularGanancias(select,ganancias);
}

var insertarTipoHabita = () =>{
  let descrip = document.getElementById("descrip_habita");
  let precio = document.getElementById("precio_habita");
  gadmin.insertarTipoHabita(descrip,precio);
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
var sessionCloseAdmin = () => {
  cliente.sessionCLoseAdmin();
}


var prueba = (this1) => {
  var valores = $(this1).parents("tr").find("td")[0].innerHTML;
  var valores4 = $(this1).parents("tr").find("td")[4].innerHTML;
  var habitacion = document.getElementById("idhabitacion");
  var preciohabitacion = document.getElementById("precioHabitacion");
  habitacion.value = valores;
  preciohabitacion.value = valores4;
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
  cliente.userData3(URLactual);
  //cargando SELECT HTML
  if (URLactual2 == URL + "Registrar/registrar") {
    registrar2.getRoles();
  }
  if (URLactual2 == URL + "Principal/principalAdmin") {
    gadmin.getTipoHabitacion();
  }

});
