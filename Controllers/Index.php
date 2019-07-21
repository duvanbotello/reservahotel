
<?php
class Index extends Controllers
{
    public function __construct()
    {
        //ejecutamos el metodo constructor de la clase padre.
        parent::__construct();
    }
    public function index()
    {
        //la siguentes dos lineas se soluciona el error de si no sea creado ninguna variable de session
        $user = null;
        $user = isset($_SESSION["User"]);
        //verifico si esta iniciado el usuario
        //si esta iniciado el usuario no dejo que vuelva al login
        if (null != $user) {
            //envio a la vista principal
            header("Location:" . URL . "Principal/principal");
        } else {
            //ejecuto el metodo render de la libreria Views le paso el cotrolador y la vista como parametro
            require VIEWS . DFT . "head.html";
            $this->view->render($this, "index");
            require VIEWS . DFT . "footer.html";
        }
    }
    public function indexAdministracion()
    {
        //la siguentes dos lineas se soluciona el error de si no sea creado ninguna variable de session
        $user = null;
        $user = isset($_SESSION["User"]);
        //verifico si esta iniciado el usuario
        //si esta iniciado el usuario no dejo que vuelva al login
        if (null != $user) {
            //envio a la vista principal
            header("Location:" . URL . "Principal/administracion");
        } else {
            //ejecuto el metodo render de la libreria Views le paso el cotrolador y la vista como parametro
            require VIEWS . DFT . "head.html";
            $this->view->render($this, "padmin");
            require VIEWS . DFT . "footer.html";
        }
    }
    //captura la informacion que se envia del cliente...
    public function userLogin()
    {
        
        if (isset($_POST["email"]) && isset($_POST["password"])) {

            //vamos a utilizar el metodo userLogin del modelo index_model
            //ya que esta clase extiende a Controllers y por consecuente se pueden
            //utilizar todas las clases dentro de Models
            //y utilizo la instancia model para el metodo UserLogin que esta dentro de index_model
            $data = $this->model->userLogin($_POST["email"], $_POST["password"]);
            
            //verificamos si es un array o contiene un array
            if (is_array($data)) {
                echo json_encode($data);
            } else {
                echo $data;
            }
        }
    }

    public function userAdmin()
    {
        //echo '<script>','alert("entre")','</script>';
        if (isset($_POST["usuario"]) && isset($_POST["password"])) {
            
            $data = $this->model->userLoginadmin($_POST["usuario"], $_POST["password"]);
            if (is_array($data)) {
                echo json_encode($data);
            } else {
                echo $data;
            }
        }
    }
}

?>