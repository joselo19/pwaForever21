var address = "http://webapp2.ajvierci.com.py/f21/";


//**********************************************/
//Money Mapping
$(".money").click(function() { 
	$("#money").hide();
	$("#secciones").show();
});





//*********************************************/
//Opciones
$("#btnLigarArticulos").click(function() { 
	$("#secciones").hide();
	$("#ligarArticulos").show();			
});

$("#btnDesligarArticulos").click(function() { 
	$("#secciones").hide();	
	$("#desligar").show();
});






//**********************************************/
//Ligar Articulos
function enviaCodigoArticulo(codigoMueble){
	$.ajax({
		url: address + "ws/codigoMueble.php?codigoMueble=" + codigoMueble,  
		dataType: "json",
		//beforeSend: function(){ cargando(true) ;},
		success: function(data) {
			
			if (data == null) {
				$("#resgistroMueble").show();
			} 
			else{
				$("#resgistroMueble").hide();
				$("#textMueble").val("");
				
				$("#ligarArticulos").hide();


				for (var i = 0; i < data.length; i++){
					var codMueble = (data[i].CODMUEBLE);
					var codZona = (data[i].CODZONA);
					var mueble = (data[i].MUEBLE); 
					var zona = (data[i].ZONA); 
					var ambiente = (data[i].AMBIENTE); 
				}

				var dato = "<h5><strong>Mueble:</strong> " +mueble+ "</h5>" +
							"<h5><strong>Zona:</strong> " +zona+ "</h5>" +
							"<h5><strong>Ambiente:</strong> " +ambiente+ "</h5>";

				var input = '<div class="col-xs-12">' + 
									'<input name="codMueble" type="hidden" value="'+codMueble+'"> ' +
							'</div>'+

							'<div class="col-xs-12">' + 
									'<input name="codZona" type="hidden"  value="'+codZona+'"> ' +
							'</div>';

				$("#colectorArticulos").show();	
				$("#mueblesZonaAmb").append(dato);
				$("#datosMueble").append(input);
				$("#mueblesZonaAmb").show();	
			}
		}
	})
}

$('#textMueble').keyup(function(e) {
	if(e.keyCode == 13) {
		var codigoMueble =  $('#textMueble').val();
		enviaCodigoArticulo(codigoMueble);
	}
});

$("#atrasLigarArticulos").click(function() { 
	$("#resgistroMueble").hide();
	$('#textMueble').val("");
	$("#ligarArticulos").hide();	
	$("#secciones").show();
});







/***********************************************/
//colectar Articulos
$('#textColecArticulos').keyup(function(e) {
	if(e.keyCode == 13) {
		var codigoArticulo =  $('#textColecArticulos').val();
		previewArticulo(codigoArticulo);
	}
});

function previewArticulo(codigoArticulo){
	var codigo = codigoArticulo;
	var input = '<div class="col-xs-12">' + 
					'<label>' +
						'<input name="codigo[]" type="checkbox" checked value="'+codigo+'"> ' +codigo+
					'</label>' +
				'</div>' +
				'<br><br>';

	$('#articulosSeleccionados').prepend(input);
	$('#textColecArticulos').val("");
}


function ligar(){
	$("#LArticulo").hide();
	$('#articulosSeleccionados').text("");
	$('#mueblesZonaAmb').text("");
	$('#textColecArticulos').val("");
	$("#ligarArticulos").show();
}


//btns ligar Articulo
$("#siConfirmLigarArticulo").click(function() { 
	$("#colectorArticulos").hide();	
	$("#LArticulo").show();
	
	$.ajax({
		dataType: 'html',
		type:'POST',
		data:$("#listaArticulos").serialize(),
		url:  address + "ws/insertArticulos.php",
		//beforeSend: function(){ cargando(true) ;},
		success: function(datos) {
			if(datos == "OK"){
				setTimeout(function() {ligar()}, 4000);
			}
		}
	});
});


$("#siCancelLigarArticulo").click(function() { 
	$("#colectorArticulos").hide();	
	$('#articulosSeleccionados').text("");
	$('#mueblesZonaAmb').text("");
	$('#textColecArticulos').val("");
	$("#ligarArticulos").show();
});	






/***********************************************/
//DESLIGAR
$("#btnDesligarPorArticulos").click(function() { 
	$("#desligar").hide();
	$("#desligarArticulos").show();	
});


$("#btnDesligarPorMuebles").click(function() { 
	$("#desligar").hide();
	$("#desligarMuebles").show();	
});


$("#atrasDesligarArticulos").click(function() { 
	$("#desligar").hide();	
	$("#secciones").show();
});






/***********************************************/
//Desligar por Artículos
function previewArticuloDesligar(codigoArticulo){
	var codigo = codigoArticulo;
	var input = '<div class="col-xs-12">' + 
					'<label>' +
						'<input name="codigo[]" type="checkbox" checked value="'+codigo+'"> ' +codigo+
					'</label>' +
				'</div>' +
				'<br><br>';

	$('#articulosSeleccionadosDesligar').prepend(input);
	$('#textDesligarArticulos').val("");
}

$('#textDesligarArticulos').keyup(function(e) {
	if(e.keyCode == 13) {
		var codigoArticulo =  $('#textDesligarArticulos').val();
		previewArticuloDesligar(codigoArticulo);
	}
});

function desligarXArt(){ 
	$("#dArticulo").hide();
	$('#articulosSeleccionadosDesligar').text("");
	$("#desligar").show();
	//$("#dMueble").hide();
}


//btns desligar Articulo
$("#siConfirmDesligarArticulo").click(function() { 
	$("#desligarArticulos").hide();	
	$("#dArticulo").show();

	$.ajax({
		dataType: 'html',
		type:'POST',
		data:$("#listaArticulosDesligar").serialize(),
		url:  address + "ws/desligarPorArticulos.php",
		//beforeSend: function(){ cargando(true) ;},
		success: function(datos) {
			if(datos == "OK"){
				setTimeout(function() {desligarXArt()}, 4000);
			}
		}
	});
});

$("#siCancelDesligarArticulo").click(function() { 
	$("#desligarArticulos").hide();	
	$('#articulosSeleccionadosDesligar').text("");
	$("#desligar").show();
});	
		





/***********************************************/
//desligar POR MUEBLE Mueble
function cantidadArticulos(codigoMueble){
	$.ajax({
		url:  address + "ws/codigoMuebleCant.php?codigoMueble=" + codigoMueble,  
		dataType: "json",
		//beforeSend: function(){ cargando(true) ;},
		success: function(data) {
			var dato = "";
			
			if (data == null) {
				dato = "<h5><strong>Cant. Artículos :</strong> 0</h5>";
			} 
			else{
				for (var i = 0; i < data.length; i++){
					var cantidad = (data[i].CANTIDAD);
				}

				dato = "<h5><strong>Cant. Artículos :</strong> " +cantidad+ "</h5>";
			}

			$("#infoMuebleDes").append(dato);
		}
	})
}


function enviaCodigoArticuloDes(codigoMueble){
	$.ajax({
		url:  address + "ws/codigoMueble.php?codigoMueble=" + codigoMueble,  
		dataType: "json",
		//beforeSend: function(){ cargando(true) ;},
		success: function(data) {
			
			if (data == null) {
				$("#resgistroMuebleDes").show();
			} 
			else{
				$("#resgistroMuebleDes").hide();
				$("#textMuebleDes").val("");
				
				$("#desligarMuebles").hide();


				for (var i = 0; i < data.length; i++){
					var codMueble = (data[i].CODMUEBLE);
					var codZona = (data[i].CODZONA);
					var mueble = (data[i].MUEBLE); 
					var zona = (data[i].ZONA); 
				}

				var dato = "<h5><strong>Mueble: </strong> " +mueble+ "</h5>" +
							"<h5><strong>Zona: </strong> " +zona+ "</h5>";

				var input = '<div class="col-xs-12">' + 
								'<input id="codMueble" name="codMueble" type="hidden" value="'+codMueble+'"> ' +
							'</div>';



				$("#infoMuebleDes").append(dato);
				$("#codMuebleDesligar").append(input);
				cantidadArticulos(codigoMueble)
				$("#desligandoMueble").show();	
			}
		}
	})
}

$('#textMuebleDes').keyup(function(e) {
	if(e.keyCode == 13) {
		var codigoMueble =  $('#textMuebleDes').val();
		enviaCodigoArticuloDes(codigoMueble);
	}
});


$("#atrasDesligarPorMuebles").click(function() { 
	$("#desligarMuebles").hide();	
	$("#resgistroMuebleDes").hide();
	$('#textMuebleDes').val("");
	$("#desligar").show();
});









/***********************************************/
//Desligando Muebles
function desligarXMueble(){ 
	$("#dMueble").hide();
	$("#infoMuebleDes").text("");
	$("#codMuebleDesligar").text("");
	$("#desligar").show();
}


$("#siConfirmDesligarMueble").click(function() { 
	$("#desligandoMueble").hide();	
	$("#dMueble").show();

	var codMueble = $("# ").show();

	$.ajax({
		dataType: 'html',
		data:$("#MuebleDesligar").serialize(),
		url:  address + "ws/desligarPorMueble.php?codMueble =" + codMueble,
		//beforeSend: function(){ cargando(true) ;},
		success: function(datos) {
			if(datos == "OK"){
				setTimeout(function() {desligarXMueble()}, 4000);
			}
		}
	});
});


$("#siCancelDesligarMueble").click(function() { 
	$("#desligandoMueble").hide();	
	$("#infoMuebleDes").text("");
	$("#codMuebleDesligar").text("");
	$("#desligar").show();
});