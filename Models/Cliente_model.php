<?php
class Cliente_model extends Conexion
{
    function __construct()
    {
        parent::__construct();   
    }
    function getTipoDocumento(){
        return $response = $this->db->select1("*","tipo_documento",null,null);
    }
}
?>