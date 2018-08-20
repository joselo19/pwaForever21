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
        
        $sql = "SELECT m.DESCRIPCION as MUEBLE, m.IDMUEBLE AS CODMUEBLE, z.DESCRIPCION as ZONA, z.IDZONA AS CODZONA, a.DESCRIPCION as AMBIENTE
				FROM MMPZONA Z, MMPMUEBLE M, MMPAMBIENTE A	
				where m.MMPZONA_IDZONA = z.IDZONA
				and z.COD_AMBIENTE = a.IDAMBIENTE
				and m.IDMUEBLE = " .  $codMueble ;
                                 
     
      
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