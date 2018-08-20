<?php  
	function conexion()
	{
		$user = "retailware"; 
		$pass = "retailware";
		$serverName = "PY-WSSCONTIC16\sqlexpress";
		$dbName = "MMP";

		try {
			$conexion = new PDO ("dblib:charset=UTF-8;host=".$serverName.";dbname=".$dbName.";",$user, $pass);

			if ($conexion) {
				return $conexion;
			}

		} catch (PDOException $e) {
			$respuesta = "Error conexion con la Bases de Datos de " .$serverName." <br /> ". $e->getMessage() . "\n";
			errorConexion($respuesta);

			exit;
		}
	}
?>