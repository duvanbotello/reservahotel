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
    public function VmisREservas()
    {

        if (null != Session::getSession("User")) {
            require VIEWS . DFT . "head.html";
            require VIEWS . DFT . "headerprinci.html";
            require VIEWS . DFT . "misreservas.html";
            require VIEWS . DFT . "footer.html";
            echo '<script type="text/javascript">','Misreservas();','</script>';
        } else {
            //redireccionamos el usuario a la vista login
            header("Location:" . URL);
        }
    }

    function getHabitacionesDisponibles()
    {
        $data = $this->model->getHabitacionesDisponibles();

        if (is_array($data)) {
            echo json_encode($data, JSON_UNESCAPED_SLASHES);
        } else {
            echo $data;
        }
    }

    function getMisReservas()
    {
        $data = $this->model->getMisReservas($_POST["idcliente"]);

        if (is_array($data)) {
            echo json_encode($data, JSON_UNESCAPED_SLASHES);
        } else {
            echo $data;
        }
    }

    function getDescuento()
    {
        if (isset($_POST["tipo_cliente"])) {
            $data = $this->model->getDescuento($_POST["tipo_cliente"]);
            if (is_array($data)) {
                echo json_encode($data);
            } else {
                echo $data;
            }
        }
    }

    public function RegistrarReserva()
    {
        //fecha1, fecha2, codigoHabitacion, dias, costo, descuento, totalapagar,idcliente
        //$fecha_entrada, $fecha_salida, $dias, $costo, $descuento, $total, $cliente_id, $idhabitacion
        $data = $this->model->RegistrarReserva($_POST["fecha1"], $_POST["fecha2"], $_POST["dias"], $_POST["costo"], $_POST["descuento"], $_POST["totalapagar"], $_POST["idcliente"], $_POST["codigoHabitacion"],);
        if ($data == 2) {
            echo 2;
        } else {
            echo $data;
        }
    }
}
