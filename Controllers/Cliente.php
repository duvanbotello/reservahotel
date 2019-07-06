
<?php
class Cliente extends Controllers{
    function __construct(){
        parent::__construct();
    }
    //creamos un metodo para destruir la sessiones
    public function destroySession(){
        //utilizamos el metodo destroy de la clase Sessiones
        Session::destroy();
        //y redirecciona a la URL principal, osea al index
        header("Location:".URL);
    }
}
?>