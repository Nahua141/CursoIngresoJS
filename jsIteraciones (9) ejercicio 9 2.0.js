function mostrar()
{

	var contador=0;
	// declarar variables
	//var flag= true;//esto se llama bandera.
	var numero;
	var maximo;
	var minimo;
	var respuesta=true;

	//isNan ejemplo de uso= while(numero<1 || numero>10)
			//numero=prompt("Reingrese un numero: ");
			//numero=parseInt(numero);

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);

		while(isNaN(numero) || (numero < 1 || numero>10))
		{ 
			numero=prompt("Reingrese un numero: ");
			numero=parseInt(numero);
	    }
		//if(flag==true)
		
		
		if(contador== true ||  numero>maximo)
			{
				maximo=numero;
			}
			
		if(contador==true || numero<minimo)
				{
					minimo=numero;
				}
			
		
		//flag=false;
		contador++;
		//bandera= determina si paso algo o no.
		respuesta=confirm("Desea ingresar otro numero?");//el "confirm " muestra un cartel de aviso y no tenes que escribir. Parecido al prompt.


	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN
