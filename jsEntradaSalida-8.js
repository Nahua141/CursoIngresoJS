/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divisor; //numeroDivisor
	var dividendo; //numeroDividendo
	var resto; 

	divisor= document.getElementById('numeroDivisor').value;//[object HTMLInputElement] sale eso es porque falta el ".value".
	// el signo "+"" pude concatenar o sumar. concatena si detecta "" entre número.
	//parseInt importante para sumar. Se usa para los números. Cuando aparece el Nan(not a number) es porque lo que detecto no es un número.
	divisor=parseInt(divisor);

	//alert (divisor); 

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=parseInt(dividendo);
	//alert(divisor);

	resto= divisor/dividendo

	alert(resto);
}
