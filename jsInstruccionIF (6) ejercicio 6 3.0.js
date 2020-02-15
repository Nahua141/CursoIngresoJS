function mostrar()
{
	var edad; 
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("mayor");
	} 
	else
	{
		if(edad<13)
		{
			alert("menor");
		}
		else
		{
			
			alert("adolescente");
			
		}
	}



}//FIN DE LA FUNCIÓN