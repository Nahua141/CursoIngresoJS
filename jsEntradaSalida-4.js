/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
	alert= sale un cuadro con una alerta.
*/
function mostrar()
{	
	var nombre; 
	
	nombre=prompt("Ingrese su nombre:"); //el prompt nos muestra un mensaje.
	//elNombre
	document.getElementById("elNombre").value = nombre;
}




