class Registrar {
    _construct() {

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


}