
<?php
class Cliente extends Controllers
{
    function __construct()
    {
        parent::__construct();
        $this->getTipoDocumento();
    }
    //creamos un metodo para destruir la sessiones
    public function destroySession()
    {
        //utilizamos el metodo destroy de la clase Sessiones
        Session::destroy();
        //y redirecciona a la URL principal, osea al index
        header("Location:" . URL);
    }

    function getTipoDocumento()
    {
        $data = $this->model->getTipoDocumento();
        if (is_array($data)) {
            echo json_encode($data);
        } else {
            echo $data;
        }
    }
}
?>