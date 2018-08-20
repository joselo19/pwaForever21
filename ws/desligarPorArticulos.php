<?php 
	
	//var_dump($_POST);

	header("Content-type: application/json");
    header("charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    ini_set('max_execution_time', 300000);

    require_once('conexion.php');

    $conexion = conexion();
       
   
    $sql = "";

    foreach ($_POST["codigo"] as  $value) {
    	$sql =  "UPDATE MMP_ART_MU SET COD_ZONA=1, COD_MUEBLE=1 WHERE COD_ARTICULO = '".$value."' ";
        $conexion->query($sql);
    }

    echo "OK";

?>