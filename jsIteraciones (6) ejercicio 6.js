function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			acumulador=acumulador+numero //el acumulador sirve para sumar.
			contador++
	}
//los promedios y los porcentajes se calculan siempre afuera del while.

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN