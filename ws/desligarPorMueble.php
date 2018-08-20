<?php 
	
	//var_dump($_POST);

	header("Content-type: application/json");
    header("charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    ini_set('max_execution_time', 300000);

    require_once('conexion.php');

    if(isset($_GET['codMueble'])) {

        $conexion = conexion();
           
       
        $codigo = $_GET["codMueble"];


        	$sql =  " UPDATE MMP_ART_MU set COD_ZONA=1, COD_MUEBLE=1 where COD_MUEBLE= '".$codigo."' ";
            $conexion->query($sql);

        echo "OK";

    }
    else 
    {
       echo "Error GET";

    }

?>