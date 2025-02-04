let numeroMinimo=parseInt(prompt("indique el numero minimero para el numero aleatorio"))
let numeroMaximo=parseInt(prompt("indique el numero maximo para el numero aleatorio"))
let intentos=0;
let numeroSecreto= 0;
let listaNumeroSortedos=[];
 
function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*(numeroMaximo-numeroMinimo+1)+numeroMinimo;
    console.log(numeroGenerado);
    console.log(listaNumeroSortedos);
    if(listaNumeroSortedos.length == numeroMaximo)
        {
            asignarTextoElemento("p","ya se sortearon todos los numeros posibles bro")
        }
    else 
    {   
        //si el numero generado esta en la lista volvemos a sortear el numero
        if(listaNumeroSortedos.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        } 
        //si el numero generado no esta en la lista proseguimos con el juego
        else 
        {
            listaNumeroSortedos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function asignarTextoElemento(elemento,texto)
{
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto)
        //si el usuario adivina el numero
        {
            asignarTextoElemento("p", `adivinaste!, lo hiciste en ${intentos} ${(intentos==1)?"intento":"intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled"); 
        }
    else 
    {
        //si el usuario no acierta el numero
        if(numeroDeUsuario > numeroSecreto) 
            {
                asignarTextoElemento("p", "el numero secreto es menor")
            }
        else asignarTextoElemento("p","el numero secreto es mayor")

        intentos++;
        palabraVeces="intentos";
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja()
{
    //let valorCaja = document.querySelector(`#valorUsuario`)//aqui llamados mediante un id al usar # pero dentro del comando querrySelector
    //valorCaja.value="";
    document.querySelector(`#valorUsuario`).value="";//hace lo mismo que arriba pero reducido
}
function condicionesIniciales()
{
    asignarTextoElemento("h1","juego del numero secreto!")
    asignarTextoElemento("p","indique un numero del 1 al 10")
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
condicionesIniciales();

function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros, generar el numero aleatorio, inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}
