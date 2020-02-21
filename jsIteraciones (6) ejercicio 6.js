function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador +1;
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+ numeroIngresado;
	}
	//en la línea 18 el contador vale 5 pq llego al final de la función.
	





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN