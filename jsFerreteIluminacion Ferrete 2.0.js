/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var cantidadLamparas;
 	var precioConDescuento;
 	var precioBruto;
 	var precioDeLamparas;
 	var marca;
 	var precioConElDescuento;

	precioDeLamparas=35
	cantidadLamparas=document.getElementById('Cantidad').value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	marca=document.getElementById('Marca').value;


	if(cantidadLamparas>5)
 	{
		precioBruto=precioDeLamparas*cantidadLamparas
		precioConDescuento=precioBruto-(precioBruto-((precioBruto*50)/100));
		document.getElementById('precioDescuento').value=precioConDescuento;

	}	 		
	if(cantidadLamparas==5)
	{
		if(marca=="ArgentinaLuz")
		{
			precioBruto=precioDeLamparas*5
			precioConDescuento=precioBruto- precioBruto*40/100;
			document.getElementById('precioDescuento').value=precioConDescuento;
		}
		else
		{
			precioBruto=precioDeLamparas*5
			precioConDescuento=precioBruto- precioBruto*30/100;
			document.getElementById('precioDescuento').value=precioConDescuento;
		}
	}	
	if(cantidadLamparas==4)
		{
			if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
			{
				precioBruto=precioDeLamparas*4
				precioConDescuento=precioBruto- precioBruto*25/100;
				document.getElementById('precioDescuento').value=precioConDescuento;
			}
			else
			{
				precioBruto=precioDeLamparas*4
				precioConDescuento=precioBruto- precioBruto*20/100;
				document.getElementById('precioDescuento').value=precioConDescuento;
			}
		}
	if(cantidadLamparas==3)
	{
			if(marca=="ArgentinaLuz")
			{
				precioBruto=precioDeLamparas*3
				precioConDescuento=precioBruto- precioBruto*15/100;
				document.getElementById('precioDescuento').value=precioConDescuento;
			}
			else
			{
				if(marca=="FelipeLamparas")
				{
				precioBruto=precioDeLamparas*3
				precioConDescuento=precioBruto- precioBruto*10/100;
				document.getElementById('precioDescuento').value=precioConDescuento;
				}			

				else
				{
				precioBruto=precioDeLamparas*3
				precioConDescuento=precioBruto- precioBruto*5/100;
				document.getElementById('precioDescuento').value=precioConDescuento;
				}
			}
	}
	if(precioConDescuento>120)
		{
			precioConElDescuento=precioBruto + ((precioBruto*10)/100)
			alert("IIBB Usted pago X");

		}
	
	

		

}
