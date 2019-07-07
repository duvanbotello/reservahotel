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
                $usuario = new class($nombre,$apellido,$telefono,$direccion,
                $tipodoc,$documento,$usuario,$correo,$contrasena){
                    private $num_documento;
                    private $nombre;
                    private $apellido;
                    private $direccion;
                    private $correo;
                    private $usuario;
                    private $contrasena;
                    private $tipo_documento;
                    private $tipo_cliente;
                    function __construct(){
                        $this->num_documento = $documento;
                        
                    }
                };
            }else{
                return 1;
            }
        }else{
            return $response;
        }
    }
}
