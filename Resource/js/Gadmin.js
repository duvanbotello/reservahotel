class Gadmin {
    _construct() {

    }

    modificarPrecio(select, precio) {
        if (select.value == 0) {
            toastr.warning('Por favor seleccione un tipo de habitacion')
        } else {
            if (precio.value == "") {
                toastr.warning('Por favor Ingrese un precio')
            } else {
                var data = new FormData();
                data.append('idtipo_habitacion', select.value);
                data.append('nuevoprecio', precio.value);
                $.ajax({
                    url: URL + "Gestionadmin/ModificarPrecioH",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: (response) => {
                        if (response == 2) {
                            toastr.success('Tipo Habitacion Modificado Exitosamente', 'Correcto', { timeOut: 5000 });
                            select.value = 0;
                            precio.value = "";

                        } else {
                            toastr.warning('Error')
                        }
                    }
                });

            }
        }
    }

    modificarDescuento(select, precio) {
        if (select.value == 0) {
            toastr.warning('Por favor seleccione un tipo de Cliente')
        } else {
            if (precio.value == "") {
                toastr.warning('Por favor Ingrese un Descuento')
            } else {
                var data = new FormData();
                data.append('idtipo_cliente', select.value);
                data.append('nuevodescuento', precio.value);
                $.ajax({
                    url: URL + "Gestionadmin/ModificarDescuentoH",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: (response) => {
                        if (response == 2) {
                            toastr.success('Descuento Modificado Exitosamente', 'Correcto', { timeOut: 5000 });
                            select.value = 0;
                            precio.value = "";

                        } else {
                            toastr.warning('Error')
                        }
                    }
                });

            }
        }
    }

    getTipoHabitacion() {
        let count = 1;
        $.post(URL + "Gestionadmin/getTipoHabitacion", {}, (response) => {
            try {
                let item = JSON.parse(response);
                document.getElementById('tipohabitaciones').options[0] = new Option("Seleccione:", 0);
                if (0 < item.results.length) {
                    for (let i = 0; i < item.results.length; i++) {
                        document.getElementById('tipohabitaciones').options[count] = new Option
                            (item.results[i].descripcion, item.results[i].idtipo_habitacion);
                        count++;
                    }

                }
            } catch (error) {
                toastr.error('eRROR.');
            }

        }

        );
    }

    getTipoCliente() {
        let count = 1;
        $.post(URL + "Gestionadmin/getTipoCliente", {}, (response) => {
            try {
                let item = JSON.parse(response);
                document.getElementById('tipocliente').options[0] = new Option("Seleccione:", 0);
                if (0 < item.results.length) {
                    for (let i = 0; i < item.results.length; i++) {
                        document.getElementById('tipocliente').options[count] = new Option
                            (item.results[i].descripcion, item.results[i].idtipo_cliente);
                        count++;
                    }

                }
            } catch (error) {
                toastr.error('eRROR.');
            }

        }

        );
    }

    calcularGanancias(select, ganancias) {
        if (select.value == 0) {
            toastr.warning('Por favor seleccione un mes');
        } else {
            let mes = select.value;
            $.post(URL + "Gestionadmin/calcularGanacias", { mes }, (response) => {
                try {
                    let item = JSON.parse(response);
                    if (item.results[0].total != null) {
                        ganancias.value = "$" + item.results[0].total;

                    } else {
                        ganancias.value = "No hay ganancias este mes";
                    }
                    select.value = 0;
                } catch (error) {
                    console.log(error);
                    toastr.error('eRROR.');
                }

            }

            );
        }
    }

    insertarTipoHabita(descrip, precio) {
        if(descrip.value == ""){
            toastr.warning('Por favor ingrese Descripcion');
        }else{
            if(precio.value == ""){
                toastr.warning('Por favor ingrese precio')
            }else{
                var data = new FormData();
                data.append('descrip', descrip.value);
                data.append('precio', precio.value);
                $.ajax({
                    url: URL + "Gestionadmin/insertarTipoHabita",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: (response) => {
                        let item = JSON.parse(response);
                        console.log(item);
                        if(item == 2){
                            toastr.success('registro Exitoso!!...');
                            descrip.value = "";
                            precio.value = "";
                        }else{
                            toastr.error('Error al registrar tipo habitacion!!...')
                        }
                    }
                });
            }
        }
    }
}