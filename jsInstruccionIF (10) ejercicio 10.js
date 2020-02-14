function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRamdom;
	notaRandom=Math.floor(Math.random() * 10) + 1; 
	 // returns a random integer from 1 to 10
	 console.log(notaRandom);

	 if(notaRandom>8)
	 {
	 	alert("EXCELENTE")
	 }
	 else 
	 {
	 	if(notaRandom<4)
	 {
	 	alert("Vamos, la proxima se puede")
	 }
	 else
	 {
	 	alert("APROBO");
	 }

	 
	 }
	

}//FIN DE LA FUNCIÓN