<?php
//Este controlador esta relacionado con la vista principal del sistema
class Reserva extends Controllers
{
    function __construct()
    {
        parent::__construct();
    }
    public function vistaReserva()
    {

        if (null != Session::getSession("User")) {
            require VIEWS . DFT . "head.html";
            require VIEWS . DFT . "headerprinci.html";
            $this->view->render($this, "reserva");
            require VIEWS . DFT . "footer.html";
        } else {
            //redireccionamos el usuario a la vista login
            header("Location:" . URL);
        }
    }

    function getHabitacionesDisponibles()
    {
        $data = $this->model->getHabitacionesDisponibles();
        
        if (is_array($data)) {
            echo json_encode($data,JSON_UNESCAPED_SLASHES);
        } else {
            echo $data;
        }
    }
}
