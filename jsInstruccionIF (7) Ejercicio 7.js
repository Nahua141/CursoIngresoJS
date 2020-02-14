function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;
	

	if(edad<18 && estadoCivil!= "soltero")
	{
		alert("Es muy pequeño pasa NO ser soltero");
	}
	

	


}//FIN DE LA FUNCIÓN