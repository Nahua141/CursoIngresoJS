
function mostrar()
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total
*/
{
	var producto;
	var jabon;
	var barbijo;
	var alcohol;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var respuesta;
	var barbijoMasCaro;
	var banderaBarbijo;
	var barbijoMasCaroFabricante;
	var barbijoMasCaroCantidad;
	var productoMasUnidades;
	var banderaJabon;
	var cantidadJabones;
	var banderaMasUnidades;
	var productoMasUnidadesFabricante;
	respuesta="si";
	banderaBarbijo="no paso";
	banderaJabon="no llego a pasar";
	banderaMasUnidades="no pasa";

	while(respuesta=="si")
	{
			producto=prompt("Ingrese un producto de prevencion de contagio: barbijo, jabon, alcohol");

			while(!isNaN(producto) && (producto!="barbijo" || producto!="jabon" || producto!="alcohol"))
			{
				producto=prompt("Ingrese un producto valido");
			}
			precio=prompt("Ingrese el precio del producto entre 100 y 300");
			precio=parseInt(precio);
			while(precio<100 || precio>300)
			{
				precio=prompt("Ingrese un precio valido");
				precio=parseInt(precio);
			}
			cantidadDeUnidades=prompt("Ingrese la cantidad de unidades entre 1 y 1000");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
			while(cantidadDeUnidades<1 || cantidadDeUnidades>1000)
			{
				cantidadDeUnidades=prompt("Ingrese una cantidad valida");
				cantidadDeUnidades=parseInt(cantidadDeUnidades);
			}
			marca=prompt("Ingrese la marca del producto");
			while(!isNaN(marca))
			{
				marca=prompt("Ingrese una marca valida");
			}
			fabricante=prompt("Ingrese el fabricante");
			while(!isNaN(fabricante))
			{
				fabricante=prompt("Ingrese un fabricante valido");
			}
			if(producto=="barbijo" && banderaBarbijo!="no paso" || barbijoMasCaro< precio)//para sacar el mas caro; unidades y el fabricante.
			{
				barbijoMasCaro=precio;
				barbijoMasCaroFabricante=fabricante;
				barbijoMasCaroCantidad=cantidadDeUnidades;
				banderaBarbijo="paso";
			}
				
				
				if(banderaMasUnidades!="no pasa" || productoMasUnidades<cantidadDeUnidades)
				{
					productoMasUnidades=producto;
					productoMasUnidades=cantidadDeUnidades;
					productoMasUnidadesFabricante=fabricante;
					banderaMasUnidades="si pasa";
				}
					
					 
				if(producto=="jabon" && banderaJabon!="no llego a pasar" || jabon<cantidadDeUnidades)
						{
							cantidadJabones=cantidadDeUnidades;
							banderaJabon="ya llego a pasar";
						}
					
			}
			
	}
			document.write("el mas caro de los barbijos es: " + barbijoMasCaro + " y la cantidad es " + barbijoMasCaroCantidad + " y el fabricante es: " + barbijoMasCaroFabricante+ "<br>");
			document.write("el item con mas unidades es: " + productoMasUnidades + " y el fabricante es " + productoMasUnidadesFabricante + "<br>");
			document.write("las unidades de jabon son: " + cantidadDeUnidades + "<br>");

			
