/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje; 
	var aumento=10/100;	
	var resultado;

	porcentaje=10/100;
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	aumento=importe*porcentaje;
	importe=importe+aumento;

	console.log(resultado);

	alert(resultado);	
}
