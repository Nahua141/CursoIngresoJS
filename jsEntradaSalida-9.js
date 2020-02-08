/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var importeMasIva;
	var impuesto;//lo puedo llamar tambien ValorDelImpuesto.
	// puedo crear una variable más que se llame Iva y despues defino Iva=21.
	importe="33"
	importe=parseInt(importe);
	impuesto=importe*21/100
	importeMasIva=importe + impuesto;
	console.log("importefinal: " + "importeMasIva");//el console.log me permite no devaguear con el f11 y me muestra paso por paso la solucion. Lo puedo usar las veces que quiera.		
}
