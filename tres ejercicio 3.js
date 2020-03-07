function mostrar()
/*Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.
*/
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta;
	var nombreMasJovenCasado;
	var banderaMasJovenCasado;
	var jovenCasado;
	respuesta="si";
	banderaMasJovenCasado="no paso";
	
	while(respuesta=="si")
	{
		nombre=prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese un nombre valido");
		}
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while(edad<0)
		{
			edad=prompt("Ingrese una edad valida");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese su sexo: f o m");
		while(!isNaN(sexo) &&  (sexo!="m" || sexo!="f"))
		{
			sexo=prompt("Ingrese su sexo: f o m");
		}
		estadoCivil=prompt("Ingrese su estado civil: soltero, casado, viudo");
		while(!isNaN(estadoCivil)&& (estadoCivil!="soltero" || estadoCivil!="casado" || estadoCivil!="viudo"))
		{
			estadoCivil=prompt("Ingrese su estado civil: soltero, casado, viudo");
		}

		if(sexo=="m" && banderaMasJovenCasado="no paso" || )
	}		
}
