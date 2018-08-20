<?php 

    header("Content-type: application/json");
    header("charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    ini_set('max_execution_time', 300000);

    require_once('conexion.php');

    $json = null;

    if(isset($_GET['codigoMueble'])) {

        $conexion = conexion();
        $codMueble = substr($_GET['codigoMueble'], -3);

        //echo $codMueble;
        
        $sql = "SELECT COUNT(COD_ARTICULO) AS CANTIDAD FROM MMP_ART_MU
                where COD_MUEBLE= " .$codMueble. " GROUP BY COD_MUEBLE";
                                 
     
      
		$stmt = $conexion->prepare($sql);
		$stmt->execute();
		
		
			
		while($resultado = $stmt->fetch(PDO::FETCH_ASSOC)){
			$json[] = $resultado;
		}

		echo json_encode($json);

	 } 
    else 
    {
       echo "Error GET";

    }
    
?>