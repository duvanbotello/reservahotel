<?php
//Este controlador esta relacionado con la vista principal del sistema
class Principal extends Controllers{
    function __construct(){
        parent::__construct();
    }
    public function principal(){
        require VIEWS.DFT."head.html";
        require VIEWS.DFT."headerprinci.html";
        $this->view->render($this,"principalcliente");
        require VIEWS.DFT."footer.html";
    }
}
?>