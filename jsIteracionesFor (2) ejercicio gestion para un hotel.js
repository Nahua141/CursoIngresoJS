function mostrar()

/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
{
    var nombre;
    var cantidadHuespedes;
    var diasDeEstadia;
    var metodoPago;
    var respuesta="SI";
    var maximoPersonas;
    var contadorDeReservas;
    var acumuladorDeDias; //cuando pide promedio tengo que validad un contador y acumulador.
    var promedio;
    var maximoPersonaHuesped;
    var maximoDeDias;
    var maximoDeDiasCantidad;
    var contadorQR;
    var contadorFT;
    var contadorTarjeta;
    var formaDePagoMasUtilizada;
    
    contadorTarjeta=0;
    contadorFT=0;
    contadorQR=0;
    contadorDeReservas=0

    while(respuesta=="s")
    {
        contadorDeReservas++;
        nombre=prompt("Ingrese su nombre");
        while(isNaN(nombre))
        {
            nombre=prompt("Ingrese su nombre");
        }
        cantidadHuespedes=prompt("Ingrese cantidad de huespedes");
        cantidadHuespedes=parseInt(cantidadHuespedes);
        while(isNaN(cantidadHuespedes) || cantidadHuespedes<1)
        {
            cantidadHuespedes=prompt("Reingrese cantidad de huespedes");
            parseInt(cantidadHuespedes);
        }
        diasDeEstadia=prompt("Ingrese dias de estadia de huespedes");
        diasDeEstadia=parseInt(diasDeEstadia);
        while(isNaN(diasDeEstadia) || diasDeEstadia<1)
        {
            diasDeEstadia=prompt("Reingrese dias de estadia de huespedes");
            parseInt(diasDeEstadia);
        }
        metodoPago=prompt("Ingrese cantidad de huespedes");
        
        while(isNaN(metodoPago) || metodoPago!="efectivo" && metodoPago!= "tarjeta" && metodoPago!="QR")
        {
            metodoPago=prompt("Metodo de pago");
            
        }

        acumuladorDeDias=acumuladorDeDias+diasDeEstadia;
        if(contadorDeReservas==1 || cantidadHuespedes>maximoPersonas)
        {
            maximoPersonas=cantidadHuespedes;
            maximoPersonas=nombre;
        }
        if(contadorDeReservas==1 || cantidadHuespedes>maximoPersonas)
        {
            maximoDeDias=diasDeEstadia;
            maximoDeDiasCantidad=diasDeEstadia ;
        }
        switch(metodoPago)
        {
            case "efectivo":
            contadorFT++;
                break;
            case "tarjeta":
            contadorTarjeta;
                    break;
            default:
            contadorQR++;
                break;     
                    
        }    
    repuesta=prompt("Desea continuar?");
    if(contadorFT>contadorQR && contadorFT>contadorTarjeta)
    {
        formaDePagoMasUtilizada="efete"
    }
    else
    {
        if(contadorQR>contadorTarjeta)
        {
            formaDePagoMasUtilizada="QR"; 
        }
        else
        {
            formaDePagoMasUtilizada="tarjeta";
        }
    }
}

} 