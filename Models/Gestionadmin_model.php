<?php
class Gestionadmin_model extends Conexion
{
    function __construct()
    {
        parent::__construct();
    }
    function getTipoHabitacion()
    {
        return $response = $this->db->select1("*", "tipo_habitacion", null, null);
    }

    function getTipoCliente()
    {
        return $response = $this->db->select1("*", "tipo_cliente", null, null);
    }

    function calcularGanacias($mes)
    {
        $response = $this->db->select1("sum(total) as total", "reserva", "MONTH(fecha_entrada) = $mes", null);

        return $response;
    }

    public function ModificarPrecioH($tipohabitacion, $nuevoprecio)
    {
        $where = "idtipo_habitacion = :Idtipo_habitacion";
        $param = array('Idtipo_habitacion' => $tipohabitacion);
        $response = $this->db->update('tipo_habitacion', $where, $nuevoprecio, 'precio', $param);
        return $response;
    }

    public function ModificarDescuentoH($tipocliente, $nuevodescuento)
    {
        $where = "idtipo_cliente = :Idtipo_cliente";
        $param = array('Idtipo_cliente' => $tipocliente);
        $response = $this->db->update('tipo_cliente', $where, $nuevodescuento, 'descuento', $param);
        return $response;
    }

    public function insertarTipoHabita($descrip, $precio)
    {
        try {
            $attr = "(descripcion,precio)";
            $values = "(:Descripcion,:Precio)";
            $param = array(
                'Descripcion' => $descrip,
                'Precio' => (int)$precio
            );
            $respuestaInsert = $this->db->insert($attr, 'tipo_habitacion', $values, $param);
            //var_dump($respuestaInsert);
            return $respuestaInsert;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
