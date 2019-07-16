class Reserva {
    _construct() {

    }


    getHabitaciones() {
        if (document.getElementById("cuerpo") != null) {
            this.limpiarTabla();
        }
        $.post(URL + "Reserva/getHabitacionesDisponibles", {}, (response) => {
            try {

                let item = JSON.parse(response);


                for (var i = 0; i < item.results.length; i++) {
                    var estado = 'Disponible'
                    var tr = `<tr>
                      <td>`+ item.results[i].idhabitaciones + `</td>
                      <td>`+ '<img class="img-fluid" src="' + item.results[i].url + '" width="400" height="200" alt="">' + `</td>
                      <td>`+ item.results[i].numHabitacion + `</td>
                      <td>`+ item.results[i].descripcion + `</td>
                      <td>`+ item.results[i].precio + `</td>
                      <td class="bg-success text-white" >`+ estado + `</td>
                      <td>`+ '<a  onclick="prueba(this)" data-dismiss="modal" class="btn btn-primary mt-2 mb-2 text-white">Elegir</a>' + `</td>
                    </tr>`;
                    $("#cuerpo").append(tr)


                }
            } catch (error) {
                toastr.error('eRROR.');
            }

        }

        );
    }

    limpiarTabla() {
        var elmtTable = document.getElementById('cuerpo');
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;
        for (var x = rowCount - 1; x + 1 > 0; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    }

    Confirmareserva(fecha1, fecha2, codigoHabitacion, precioHabitacion, dias, total, descuento, totalapagar) {
        if (totalapagar.value == '') {
            if (fecha1.value == '') {
                toastr.warning('Ingrese Fecha Inicio.');
            } else {
                if (fecha2.value == '') {
                    toastr.warning('Ingrese Fecha Fin.');
                } else {
                    if (codigoHabitacion.value == '') {
                        toastr.warning('Seleccion Una Habitacion.');
                    } else {
                        let fechaFormulario = new Date(fecha1.value);
                        let fechaFormulariofin = new Date(fecha2.value);
                        let hoy = new Date();
                        hoy.setHours(0, 0, 0, 0);
                        fechaFormulariofin.setHours(0, 0, 0, 0);
                        if (hoy <= fechaFormulario) {
                            if (fechaFormulario <= fechaFormulariofin) {
                                let user = JSON.parse(localStorage.getItem("user"));
                                let tipo_cliente = user.tipo_cliente;
                                $.post(URL + "Reserva/getDescuento", { tipo_cliente }, (response) => {
                                    try {

                                        let item = JSON.parse(response);
                                        let diasdif = fechaFormulariofin.getTime() - fechaFormulario.getTime();
                                        let contdias = Math.round(diasdif / (1000 * 60 * 60 * 24)) + 1;
                                        let total2 = precioHabitacion.value * contdias;
                                        let totalApagar2 = 0;

                                        if (item.descuento > 0) {
                                            let d = (item.descuento / 100) * (total2);
                                            totalApagar2 = (total2) - d;

                                            console.log(totalApagar2)
                                        } else {
                                            totalApagar2 = total2;
                                        }
                                        dias.value = contdias;
                                        total.value = total2;
                                        descuento.value = item.descuento;
                                        totalapagar.value = totalApagar2;

                                    } catch (error) {
                                        //por si susece algun error en el proceimiento
                                        toastr.error('Error en Descuento');

                                    }
                                });

                            } else {
                                toastr.warning('La fecha de salida no debe ser menor a la de entrada.');
                            }
                        }
                        else {
                            toastr.warning('Fecha Inicio Invalida, debe ser mayor a la fecha actual');
                        }
                    }
                }
            }
        } else {
            toastr.warning('Su reserva ya esta confirmada, por favor haga reserva');
        }

    }

    HacerReserva(fecha1, fecha2, codigoHabitacion, dias, costo, descuento, totalapagar) {
        if (totalapagar == '') {
            toastr.warning('Por Favor Confirme su reserva');
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            let idcliente = user.idcliente;

            var data = new FormData();
            data.append('fecha1', fecha1);
            data.append('fecha2', fecha2);
            data.append('codigoHabitacion', codigoHabitacion);
            data.append('dias', dias);
            data.append('costo', costo);
            data.append('descuento', descuento);
            data.append('totalapagar', totalapagar);
            data.append('idcliente', idcliente);
   
            $.ajax({
                url: URL + "Reserva/RegistrarReserva",
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: (response) => {
                    console.log(response);
                    toastr.error(response);
                    if (response == 2) {
                        toastr.success('Su reserva se realizo con Exito..', 'Bienvenido', { timeOut: 5000 });
                        window.location.href = URL + "Reserva/VmisREservas";
                    }
                }
            });
        }

    }

    getMisReservas() {
        let user = JSON.parse(localStorage.getItem("user"));
        let idcliente = user.idcliente;
        $.post(URL + "Reserva/getMisReservas", {idcliente}, (response) => {
            try {
                
                let item = JSON.parse(response);
                console.log(item)
                if(Array.isArray(item)){
                    for (var i = 0; i < item.length; i++) {
                        var tr = `<tr>
                          <td>`+ item[i].codigo + `</td>
                          <td>`+ item[i].fecha_entrada + `</td>
                          <td>`+ item[i].fecha_salida + `</td>
                          <td>`+ item[i].dias + `</td>
                          <td>`+ item[i].costo + `</td>
                          <td>`+ item[i].descuento + `</td>
                          <td>`+ item[i].total + `</td>
                          <td>`+ item[i].idhabitacion + `</td>
                        </tr>`;
                        $("#cuerpoMisReservas").append(tr)
    
    
                    }
                }
                
                
            } catch (error) {
                toastr.error('eRROR.');
            }

        }

        );
    }
}