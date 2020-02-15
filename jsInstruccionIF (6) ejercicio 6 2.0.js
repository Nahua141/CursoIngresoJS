function mostrar()
{
	var edad; 
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("mayor");
	} 
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	if(edad<13)
	{
		alert("es un niño");
	}




}//FIN DE LA FUNCIÓN