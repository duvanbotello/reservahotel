class Cliente {
    constructor() {

    }
    //metodo loginUser
    iniciarSesion(email, password) {

        //verifica que el campo email contenga datos.
        if (email == "") {
            //el .focus útil para posicionarnos en un campo concreto de un formulario, ya sea al principio del formulario 
            //o por validaciones que vayamos haciendo y que nos hagan ir a otro campo del formulario.
            document.getElementById("email").focus();
            //toast para mandar mensajes
            toastr.error('Ingrese Correo Electronico.');
        } else {
            //si el campo del email tieLone datos verifica el de la pasword
            if (password == "") {
                document.getElementById("password").focus();
                toastr.error('Ingrese Contraseña.');
            } else {
                //valida utilizan la funcion validarEmail que esta en Funciones 
                //verificar si el email es valido

                if (validarEmail(email)) {

                    //para enviar nuestros datos por post al servidor
                    //le enviamos como parametro la ruta del controlador
                    //y optenemos respuesta atraves de response.

                    $.post("Index/userLogin", { email, password }, (response) => {
                        try {

                            //paso los datos del vector response que envian desde el servidor
                            //con JSON para manejarlos en la vista.

                            var item = JSON.parse(response);

                            //Verifico que el idUsuario sea mayor a 0 para verificar que el inicio de 
                            //session sea valido.

                            if (0 < item.idcliente) {
                                //el metodo localstore nos permite crear elementos para almacenarlos 
                                //en la memoria de nuestro navegador
                                //con tiene la llave user y almacena la informacion de response
                                localStorage.setItem("user", response);
                                //si el inicio de session es correcto lo enviamos al controlador Principal
                                //para que abra la vista principal
                                window.location.href = URL + "Principal/principal";
                            } else {
                                //de lo contrario mostramos un mensaje de error
                                toastr.error('Contraseña Incorrecto.');
                            }
                        } catch (error) {
                            //por si susece algun error en el proceimiento
                            toastr.error('Email No registrado');

                        }
                    });

                } else {
                    document.getElementById("email").focus();
                    toastr.error('Ingrese Una Direccion de Correo Valida.');
                }
            }
        }
    }

    iniciarSesionAdmin(usuario, password) {
        if (usuario == "") {
            document.getElementById("usuarioAdmin").focus();
            toastr.warning('Ingrese Usuario.');
        } else {
            if (password == "") {
                document.getElementById("passwordAdmin").focus();
                toastr.warning('Ingrese Contraseña.');
            } else {

                var data = new FormData();
                data.append('usuario', usuario);
                data.append('password', password);
  
                $.ajax({
                    url: URL + "Index/userAdmin",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: (response) => {
                        if(response == 1){
                            toastr.error('Contraseña Incorrecta');
                        }else if(response == 2){
                            toastr.error('El Usuario No Existe');
                        }else{
                            let item = JSON.parse(response);
                            
                            if(item.tipo_empleado == 1){
                                localStorage.setItem("admin", response);
                                window.location.href = URL + "Principal/principalAdmin";
                                toastr.success("Es administrador");
                            }else{
                                localStorage.setItem("admin", response);
                                toastr.success("Es Recepcionista");
                            }
                           
                        }
                        
                       
                    }
                });


            }
        }
    }

    userData(URLactual) {
        //si nos encontramos en el login elimino los datos de navegacion que estan en el navegador
        //PATHNAME es una contante que inicie en config.js
        if (PATHNAME == URLactual) {
            //removemo los datos del navegador
            localStorage.removeItem("user");
        } else {
            if (null != localStorage.getItem("user")) {
                //convierto los datos del usuario que estan en el navegador en una coleccion de datos
                let user = JSON.parse(localStorage.getItem("user"));
                console.log(user.tipo_cliente);
                if (0 < user.idcliente) {
                    //enviamos los datos al elemento con id name1
                    document.getElementById("name1").innerHTML = "Bienvenido, " + user.nombre + " " + user.apellido;
                }
            }
        }
    }

    userData3(URLactual) {
        //si nos encontramos en el login elimino los datos de navegacion que estan en el navegador
        //PATHNAME es una contante que inicie en config.js
        if (PATHNAME == URLactual) {
            //removemo los datos del navegador
            localStorage.removeItem("admin");
        } else {
            if (null != localStorage.getItem("admin")) {
                //convierto los datos del usuario que estan en el navegador en una coleccion de datos
                let admin = JSON.parse(localStorage.getItem("admin"));
                console.log(admin.idempleado);
                if (0 < admin.idempleado) {
                    //enviamos los datos al elemento con id name1
                    document.getElementById("name2").innerHTML = "Bienvenido, " + admin.nombre + " " + admin.apellido;
                }
            }
        }
    }

    //funcionar para remover los datos almacenados en el navegador temporalmente
    sessionCLose() {
        localStorage.removeItem("user");
    }
    sessionCLoseAdmin() {
        localStorage.removeItem("admin");
    }
}