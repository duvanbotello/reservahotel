<?php
class Reserva_model extends Conexion
{
    function __construct()
    {
        parent::__construct();
    }

    function getHabitacionesDisponibles()
    {
        return $response = $this->db->getHabitaciones();;
    }


    function getDescuento($tipo_cliente)
    {
        $where = "idtipo_cliente = :Tipo_Cliente";
        $param = array('Tipo_Cliente' => $tipo_cliente);

        $response = $this->db->select1("descuento", 'tipo_cliente', $where, $param);

        if (is_array($response)) {
            $response = $response['results'];
            $data = array(
                "descuento" => $response[0]["descuento"],
            );
            return $data;
        } else {
            return $response;
        }
    }

    function getMisReservas($id_cliente)
    {
        $where = "cliente_id = :Cliente_id";
        $param = array('Cliente_id' => $id_cliente);

        $response = $this->db->select1("*", 'reserva', $where, $param);

        if (is_array($response)) {
            $response = $response['results'];
            
            return $response;
        } else {
            return $response;
        }
    }

    public function RegistrarReserva($fecha_entrada, $fecha_salida, $dias, $costo, $descuento, $total, $cliente_id, $idhabitacion)
    {

        $attr = "(fecha_entrada,fecha_salida,dias,costo,descuento,total,cliente_id,idhabitacion)";
        $values = "(:Fecha_entrada,:Fecha_salida,:Dias,:Costo,:Descuento,:Total,:Cliente_id,:Idhabitacion)";
        $param = null;
        $param = array(
            'Fecha_entrada' => $fecha_entrada,
            'Fecha_salida' => $fecha_salida,
            'Dias' => $dias,
            'Costo' => $costo,
            'Descuento' => $descuento,
            'Total' => $total,
            'Cliente_id' => $cliente_id,
            'Idhabitacion' => $idhabitacion
        );
        $respuestaInsert = $this->db->insert($attr, 'reserva', $values, $param);
        if($respuestaInsert == 2){
            $modificarEstadoHabitacion = $this->db->EstadoHabitacion($idhabitacion);
        }
        return $respuestaInsert;
    }
}
