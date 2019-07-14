class Reserva {
    _construct() {

    }

    eliminarValoresTabla() {

        var node = document.getElementById("cuerpo");
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    }

    getHabitaciones() {
        if(document.getElementById("cuerpo") != null){
            this.limpiarTabla();
        }
        $.post(URL + "Reserva/getHabitacionesDisponibles", {}, (response) => {
            try {
                
                let item = JSON.parse(response);
                
                
                for (var i = 0; i < item.results.length; i++) {
                    var estado = 'Disponible'
                    var tr = `<tr>
                      <td>`+ item.results[i].idhabitaciones + `</td>
                      <td>`+ '<img class="img-fluid" src="'+item.results[i].url+'" width="400" height="200" alt="">' + `</td>
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
        for (var x = rowCount - 1; x+1 > 0; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    }

}