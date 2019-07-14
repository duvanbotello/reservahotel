<?php
class Reserva_model extends Conexion
{
    function __construct()
    {
        parent::__construct();   
    }

    function getHabitacionesDisponibles(){
        return $response = $this->db->getHabitaciones();;
    }
 
}
?>