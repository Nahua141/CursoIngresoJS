function mostrar()
/*
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
*/
{
    var animal;
    var pesoAnimal;
    var temperaturaHabitat;
    var respuesta;
	var temperaturasPares;
	var contadorTemperaturas;
	var acumuladorTemperaturas;
	var animalMasPesado;
	var contadorAnimales;
	var acumualadorAnimales;
	var animalesAMenosDe0;
	var contadorAnimalesMenosDe0;
	var acumualadorAnimalesMenosDe0;
	contadorTemperaturas=0;
	acumuladorTemperaturas=0;
	contadorAnimales=0;
	acumualadorAnimales=0;
	contadorAnimalesMenosDe0=0;
	acumualadorAnimalesMenosDe0=0;
	respuesta="s";

    while(respuesta=="s")
    {
		animal=prompt("Ingrese el nombre de un animal");
		animal=parseInt(animal);
        while(!isNaN(animal))
        {
            animal=prompt("Reingrese el nombre de un animal");
        }
        pesoAnimal=prompt("Ingrese el peso del animal");
        pesoAnimal=parseInt(pesoAnimal);
        while(isNaN(pesoAnimal) || pesoAnimal<1 || pesoAnimal>1000)
        {
            pesoAnimal=prompt("Reingrese el peso del animal");
        }
        temperaturaHabitat=prompt("Ingrese la temperatura del habitat");
        temperaturaHabitat=parseInt(temperaturaHabitat);
        while(isNaN(temperaturaHabitat) || temperaturaHabitat<-30 || temperaturaHabitat>30)
        {
            temperaturaHabitat=prompt("Reingrese la temperatura del habitat");
		} 
		acumuladorTemperaturas=contadorTemperaturas;
		if(contadorTemperaturas%2 == 0) //"%==0" se usa para sacar numeros pares.
		{
			temperaturasPares=temperaturaHabitat;
			temperaturasPares=animal;
		}
		acumualadorAnimales=animalMasPesado
		if(contadorAnimales)    
		{

			animalMasPesado=animal+ temperaturaHabitat;
		}   
		acumualadorAnimalesMenosDe0=
		if()
		{
			animalesAMenosDe0=animal;
		}
		
    }
    
}



//FIN DE LA FUNCIÓN