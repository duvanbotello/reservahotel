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
    public function registrarusuario(){
        $data = $this ->model->registrarusuario($_POST["nombre"],$_POST["apellido"],
        $_POST["telefono"],$_POST["direccion"],$_POST["tipodoc"],$_POST["documento"],
        $_POST["usuario"],$_POST["correo"],$_POST["contrasena"]);
        if($data == 1){
            echo 1;
        }else if($data == 2){
            echo 2;
        }else{
            echo $data;
        }
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
