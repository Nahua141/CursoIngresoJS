/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;
	var resultadoDeLaSuma;
	
	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaSuma=primerNumero+segundoNumero;


	console.log(resultadoDeLaSuma);
	
	
	
	
	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	var resultadoDeLaResta;
	
	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaResta=primerNumero-segundoNumero;


	console.log(resultadoDeLaResta);
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicar;
	var resultadoDeLaMultiplicación;
	
	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaMultriplicación=primerNumero*segundoNumero;


	console.log(resultadoDeLaMultiplicación);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;
	var resultadoDeLaDivisión;
	
	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaDivisión=primerNumero/segundoNumero;


	console.log(resultadoDeLaDivisión);
	

}

