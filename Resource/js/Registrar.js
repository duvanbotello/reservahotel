class Registrar {
    _construct() {

    }

    registrar(nombre, apellido, telefono, direccion, tipodoc, documento, usuario, correo, contrasena1, contrasena2) {

        if (nombre == '') {
            toastr.error('Ingrese Nombres.');
            document.getElementById("c_nombre").focus();
            //toast para mandar mensajes 
        } else {
            if (apellido == '') {
                toastr.error('Ingrese Apellidos.');
                document.getElementById("c_apellido").focus();
            } else {
                if (telefono == '') {
                    toastr.error('Ingrese Telefono.');
                    document.getElementById("c_telefono").focus();
                } else {
                    if (direccion == '') {
                        toastr.error('Ingrese Direccion.');
                        document.getElementById("c_direccion").focus();
                    } else {
                        if (tipodoc == 0) {
                            toastr.error('Seleccione Tipo Documento.');
                            document.getElementById("TipoDocumento").focus();
                        } else {
                            if (documento == '') {
                                toastr.error('Ingrese Documento.');
                                document.getElementById("c_documento").focus();
                            } else {
                                if (documento == '') {
                                    toastr.error('Ingrese Documento.');
                                    document.getElementById("c_documento").focus();
                                } else {
                                    if (usuario == '') {
                                        toastr.error('Ingrese Usuario.');
                                        document.getElementById("c_usuario").focus();
                                    } else {
                                        if (soloLetras(usuario)) {
                                            if (correo == '') {
                                                toastr.error('Ingrese Correo.');
                                                document.getElementById("c_correo").focus();
                                            } else {
                                                if (validarEmail(correo)) {
                                                    if (contrasena1 == '') {
                                                        toastr.error('Ingresar Contraseña 1.');
                                                        document.getElementById("c_contrasena1").focus();
                                                    } else {
                                                        if (contrasena2 == '') {
                                                            toastr.error('Ingresar Contraseña 2.');
                                                            document.getElementById("c_contrasena2").focus();
                                                        } else {
                                                        
                                                            if (this.verificandopasswrod2(contrasena1, contrasena2)) {
                                                                //creamos una coleccion de objetos para enviarlos al servidor 
                                                                var data = new FormData();
                                                                data.append('nombre', nombre);
                                                                data.append('apellido', apellido);
                                                                data.append('telefono', telefono);
                                                                data.append('direccion', direccion);
                                                                data.append('tipodoc', tipodoc);
                                                                data.append('documento', documento);
                                                                data.append('usuario', usuario);
                                                                data.append('correo', correo);
                                                                data.append('contrasena', contrasena1);
                                                               
                                                                $.ajax({
                                                                    url: URL + "Registrar/registrarusuario",
                                                                    data: data,
                                                                    cache: false,
                                                                    contentType: false,
                                                                    processData: false,
                                                                    type: 'POST',
                                                                    success: (response) => {
                                                                        toastr.error(response);
                                                                        if (response == 1) {
                                                                            toastr.error('EL email ya esta registrado...');
                                                                            ocument.getElementById("c_correo").focus();
                                                                        } else if(response == 2) {
                                                                            toastr.success('Su registro se a completado con Exito..', 'Bienvenido', { timeOut: 5000 });
                                                                            document.getElementById("formularioRegistro").reset();
                                                                        }
                                                                    }
                                                                });

                                                            } else {
                                                                toastr.error('Las contraseñas deben Coincidir.');
                                                                document.getElementById("c_contrasena1").focus();
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    toastr.error('Correo No Valido.');
                                                    document.getElementById("c_correo").focus();
                                                }
                                            }
                                        } else {
                                            toastr.error('El usuario solo puede contener letras.');
                                            document.getElementById("c_usuario").focus();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    vistraRegistrar() {
        window.location = URL + "Registrar/registrar";
    }
    //nos camos a comuniar con nuestro controlador para traer los datos
    getRoles() {
        let count = 1;
        $.post(URL + "Registrar/getTipoDocumento", {}, (response) => {
            try {
                let item = JSON.parse(response);
                console.log(response);
                document.getElementById('TipoDocumento').options[0] = new Option("Seleccione Tipo Doc", 0);
                if (0 < item.results.length) {
                    for (let i = 0; i < item.results.length; i++) {
                        document.getElementById('TipoDocumento').options[count] = new Option
                            (item.results[i].Descripcion, item.results[i].idtipo_documento);
                        count++;
                    }

                }
            } catch (error) {
                toastr.error('eRROR.');
            }

        }

        );
    }

    //muestro el alert de bootstrap
    visibleALert() {
        var alerta1 = document.getElementById('Alerta1');
        alerta1.style.display = 'block';
    }
    //oculto el alert de bootstrap
    ocultarALert() {
        var alerta1 = document.getElementById('Alerta1');
        alerta1.style.display = 'none';
    }

    //verifico que los dos pasworld sean iguales
    verificandopasswrod(passwrod1, password2) {
        if (passwrod1 != password2) {
            this.visibleALert();

        } else {
            this.ocultarALert();
        }
    }

    verificandopasswrod2(passwrod1, password2) {
        if (passwrod1 != password2) {
            return false;

        } else {
            return true;
        }
    }


}