let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales(){
    asignarTextoElemento('h1', "¡Juego del número secreto!");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p', "El número secreto es mayor.");
        } else{
            asignarTextoElemento('p', "El número secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el contador de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento('p', "Ya se sortearon todos los números posibles");
    } else {
        //Verificar si el numero generado ya está en la lista de números sorteados
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }        
    }
}

condicionesIniciales();