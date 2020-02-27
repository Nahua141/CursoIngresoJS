function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var bandera;
	bandera=0;
	numeroIngresado=prompt("ingrese un numero");

	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			bandera=1;
			alert(" No es primo el " + numeroIngresado);
			break;
		}
	}

 	if(bandera!=1)
 	{
 		alert(" Es primo el " + numeroIngresado);
 	}
	


}
//FIN DE LA FUNCIÓN
