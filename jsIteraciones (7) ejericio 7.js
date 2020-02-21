function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
	var isNan;
	
	while(respuesta=="si")
	{
		contador=contador +1;
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNan(numeroIngresado))
		{
			numeroIngresado=prompt("error ingrese un numero valido");
			numeroIngresado=parseInt(numeroIngresado);

		}
		acumulador=acumulador+ numeroIngresado;

		respuesta=prompt("ingrese SI para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN