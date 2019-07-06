
<?php
    class Index extends Controllers
    {
        public function __construct() {
            //ejecutamos el metodo constructor de la clase padre.
            parent::__construct();
        }
        public function index(){
            //ejecuto el metodo render de la libreria Views le paso el cotrolador y la vista como parametro
            require VIEWS.DFT."head.html";
            $this->view->render($this,"index");
            require VIEWS.DFT."footer.html";
        }
        //captura la informacion que se envia del cliente...
        public function userLogin(){
            
            if(isset($_POST["email"]) && isset($_POST["password"])){
                
                //vamos a utilizar el metodo userLogin del modelo index_model
                //ya que esta clase extiende a Controllers y por consecuente se pueden
                //utilizar todas las clases dentro de Models
                //y utilizo la instancia model para el metodo UserLogin que esta dentro de index_model
               $data = $this->model->userLogin($_POST["email"],$_POST["password"]);
               //verificamos si es un array o contiene un array
                if(is_array($data)){
                    echo json_encode($data);
                 }else{
                    echo $data;
                 }
            }
        }
    }
    
?>