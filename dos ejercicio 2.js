function mostrar()
/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.
*/
{
	var peso;
	var precioPorKilo;
	var validad; 
	var respuesta;
	var alimentoMasCaro;
	var alimentoMasCaroTipo;
	var primerDescuento;
	var segundoDescuento;
	var precioFinal;
	var contador;
	var acumuladorPrecioPorKilo;
	var contadorPrecioPorKilo;
	var precioFinalSinDescuento;
  	respuesta="si";
  	primerDescuento=15;
  	segundoDescuento=25;
  	contador=0;
  	acumuladorPrecioPorKilo=0;
  	contadorPrecioPorKilo=0;

  while(respuesta=="si")
 	 	{
 	 		peso=prompt("Ingrese el peso de los productos entre 10 y 1000");
 	 		peso=parseInt(peso);
 	 		while(peso<10 && peso>1000)
 	 		{
 	 			peso=prompt("Ingrese un peso valido entre 10 y 1000");
 	 			peso=parseInt(peso);
 	 		}
 	 		precioPorKilo=prompt("Ingrese el precio por kilo del producto mayor a 0");
 	 		precioPorKilo=parseInt(precioPorKilo);
 	 		while(precioPorKilo<0)
 	 		{
 	 			precioPorKilo=prompt("Ingrese un precio valido mayor a 0"),
 	 			precioPorKilo=parseInt(precioPorKilo);
 	 		}
 	 		validad=prompt("Ingrese la validad del producto: v, a, m");
 	 		while(validad!= "v" && validad!= "a" && validad!="m")
 	 		{
 	 			validad=prompt("Ingrese una validad que sea valida");
 	 		}
 	 		
 	 		
 	 		if(contador==0 || alimentoMasCaro<precio)//para averiguar maximo.
 	 		{
 	 			alimentoMasCaro=precio;
 	 			alimentoMasCaroTipo=validad;
 	 		}

 	 	}
  		
  		if(precioPorKilo>100)
  		{
  			precioFinalSinDescuento=precioPorKilo*precio;
  		}
  		else
  		{ 
  		if(precioPorKilo<100)
 	 		{
 	 			precioFinal=precioPorKilo-(precioPorKilo*primerDescuento/100);

 	 		}
 	 		else
 	 		{
 	 			if(precioPorKilo<300)
 	 			{
 	 				precioFinal=precioPorKilo-(precioPorKilo*segundoDescuento/100);
 	 			}
 	 		}		
 	 	}	
 	 	precioPorKilo=acumuladorPrecioPorKilo/contador;

 	 	document.write("El importe a pagar sin descuento es: " + precioFinalSinDescuento + "<br>");
 	 	document.write("El importea pagar con descuento es: " + precioFinal + "<br>");
 	 	document.write("El alimento mas caro es: " + alimentoMasCaroTipo + "<br>");
 	 	document.write("El promedio de precio por kilo es: " + precioPorKilo + "<br>");



}

