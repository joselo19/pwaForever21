<?php 
	//var_dump($_POST);

	header("Content-type: application/json");
    header("charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    ini_set('max_execution_time', 300000);

    require_once('conexion.php');

    $json = null;
    $conexion = conexion();
       
    $codMueble =  $_POST["codMueble"];
    $codZona =  $_POST["codZona"];
    
    $sql = "INSERT INTO MMP_ART_MU  VALUES ";

    foreach ($_POST["codigo"] as  $value) {
    	 $sql .=  "('".date('Y-m-d H:i:s')."',".$codZona.",".$codMueble.",'$value'),";
    }


	$sql =trim($sql, ",");          
    $conexion->query($sql);


    echo "OK";
	
?>