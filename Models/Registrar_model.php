<?php
class Registrar_model extends Conexion
{
    function __construct()
    {
        parent::__construct();   
    }
    function getTipoDocumento(){
        return $response = $this->db->select1("*","tipo_documento",null,null);
    }

    public function registrarusuario($nombre,$apellido,$telefono,$direccion,
    $tipodoc,$documento,$usuario,$correo,$contrasena){
        $where = "correo = :Correo";
        $param = array('Correo' => $correo);
        $response = $this->db->select1("*",'cliente',$where,$param);
        if(is_array($response)){
            $response = $response['results'];
            //en esta coleccion de datos no hay ningun registro
            //por lo tanto no esta registrado
            //devuelve 0
            if(0 == count($response)){
                //creando clase anonimas
                //solo se utilizara una ves
                $tipodoc = (int) $tipodoc;
                $where = "correo = :Correo";
                $attr = "(num_documento,nombre,apellido,direccion,correo,usuario,contrasena,tipo_documento,tipo_cliente)";
                $values = "(:Num_documento,:Nombre,:Apellido,:Direccion,:Correo,:Usuario,:Contrasena,:Tipo_documento,:Tipo_cliente)";
                $password = password_hash($contrasena, PASSWORD_DEFAULT);
                $param = null;
                $param = array('Num_documento' => $documento,
                               'Nombre' => $nombre,
                               'Apellido' => $apellido,
                               'Direccion' => $direccion,
                               'Correo' => $correo,
                               'Usuario' => $usuario,
                               'Contrasena' => $password,
                               'Tipo_documento' => (int)$tipodoc,
                               'Tipo_cliente' => '1');

                $respuestaInsert = $this->db->insert($attr,'cliente', $values, $param);
                return $respuestaInsert;
                
            }else{
                return 1;
            }
        }else{//envia error si se presento inconveniente en la consulta
            return $response;
        }
    }
}
