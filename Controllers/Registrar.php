<?php
//Este controlador esta relacionado con la vista principal del sistema
class Registrar extends Controllers
{
    function __construct()
    {
        parent::__construct();
    }
    public function registrar()
    {
        $user = null;
        $user = isset($_SESSION["User"]);
        //verifico si esta iniciado el usuario
        //si esta iniciado el usuario no dejo que vuelva al login
        if (null != $user) {
            //envio a la vista principal
            header("Location:" . URL);
        } else {
            //ejecuto el metodo render de la libreria Views le paso el cotrolador y la vista como parametro
            require VIEWS . DFT . "head.html";
            $this->view->render($this, "registrar");
            require VIEWS . DFT . "footer.html";
        }
    }
}
