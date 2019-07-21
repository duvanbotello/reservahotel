<?php
//Este controlador esta relacionado con la vista principal del sistema
class Gestionadmin extends Controllers
{
    function __construct()
    {   
        parent::__construct();
        
    }

   

    function getTipoHabitacion()
    {
        $data = $this->model->getTipoHabitacion();
        if (is_array($data)) {
            echo json_encode($data);
        } else {
            echo $data;
        }
    }

    function getTipoCliente()
    {
        $data = $this->model->getTipoCliente();
        if (is_array($data)) {
            echo json_encode($data);
        } else {
            echo $data;
        }
    }


    public function ModificarPrecioH(){
        $data = $this ->model->ModificarPrecioH($_POST["idtipo_habitacion"],$_POST["nuevoprecio"]);
        if($data == 2){
            echo 2;
        }else{
            echo $data;
        }
    }

    public function ModificarDescuentoH(){
        $data = $this ->model->ModificarDescuentoH($_POST["idtipo_cliente"],$_POST["nuevodescuento"]);
        if($data == 2){
            echo 2;
        }else{
            echo $data;
        }
    }

    public function calcularGanacias(){
        $data = $this ->model->calcularGanacias($_POST["mes"]);
        
        if($data == 2){
            echo 2;
        }else{
            echo json_encode($data);
        }
    }
}
