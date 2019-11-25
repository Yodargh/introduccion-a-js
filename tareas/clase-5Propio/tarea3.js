
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $BOTON_INGRESAR = document.querySelector('#calcular')
let $RESULTADO_HORAS = document.querySelector('#resultado-hora')
let $RESULTADO_MINUTOS = document.querySelector('#resultado-minutos')
let $RESULTADO_SEGUNDOS = document.querySelector('#resultado-segundos')


$BOTON_INGRESAR.onclick = function () {
    let horasNode = document.querySelectorAll('.horas')
    //Convierte en node el input del usuario de horas
    let horasTotalesArray = Array.prototype.slice.call(horasNode)
    //transforma el node a un array para poder sumarlos
    let contenedorHoras = 0
    //contiene el valor inicial para poder hacer un bucle y sumar el array correspondiente
    let minutosNode = document.querySelectorAll('.minutos')
    let minutosTotalesArray = Array.prototype.slice.call(minutosNode)
    let contenedorMinutos = 0
    let segundosNode = document.querySelectorAll('.segundos')
    let segundosTotalesArray = Array.prototype.slice.call(segundosNode)
    let contenedorSegundos = 0

    // bucle para calcular los totales sumando el contenido del array
    for (let i = 0; i < horasTotalesArray.length; i++) {
        //el value es para agarrar el numero en cuestion sino tira nulo el bucle
        contenedorHoras = contenedorHoras + Number(horasTotalesArray[i].value)
    }

    for (let i = 0; i < minutosTotalesArray.length; i++) {
        contenedorMinutos = contenedorMinutos + Number(minutosTotalesArray[i].value)
    }
    for (let i = 0; i < segundosTotalesArray.length; i++) {
        contenedorSegundos = contenedorSegundos + Number(segundosTotalesArray[i].value)

    }

    //bucle while para transformar minutos y segundos excedentes
    while (contenedorSegundos > 59) {
        contenedorSegundos = contenedorSegundos - 60
        contenedorMinutos++
    }

    while (contenedorMinutos > 59) {
        contenedorMinutos = contenedorMinutos - 60
        contenedorHoras++
    }


    $RESULTADO_HORAS.value = contenedorHoras
    $RESULTADO_MINUTOS.value = contenedorMinutos
    $RESULTADO_SEGUNDOS.value = contenedorSegundos


    console.log(contenedorHoras)
    console.log(contenedorMinutos)
    console.log(contenedorSegundos)

    return false;
}








//
// CODIGO VIEJO
// NO SIRVE
//

/*

const $BOTON_INGRESAR = document.querySelector('#boton-ingresar');


$BOTON_INGRESAR.onclick = function () {
    const $HORAS = document.querySelector('#hora-ingresado').value;
    const $MINUTOS = document.querySelector('#minuto-ingresado').value;
    const $SEGUNDOS = document.querySelector('#segundo-ingresado').value;

    const tiempoTotal = ($HORAS * 60 * 60) + ($MINUTOS * 60) + $SEGUNDOS
    document.querySelector('#resultado2').textContent = tiempoTotal

    return false
}
*/

/*
const $BOTON_INGRESAR = document.querySelector('#boton-ingresar');
const $NODO_FORMULARIO = document.querySelector('form');


$BOTON_INGRESAR.onclick = function () {
    const $CANTIDAD_VIDEO_INGRESADO = document.querySelector('#cantidad-videos').value
    for (let i = 0; i < $CANTIDAD_VIDEO_INGRESADO; i++) {
        const $CREAR_NUEVO_INPUT = document.createElement('input');
        const $CREAR_NUEVO_SEPARADOR = document.createElement('br');
        $CREAR_NUEVO_INPUT.id = `nuevo-formulario-${i}`
        $NODO_FORMULARIO.appendChild($CREAR_NUEVO_INPUT);
        $NODO_FORMULARIO.appendChild($CREAR_NUEVO_SEPARADOR);

    }
    return false;

}
*/






// falta el <strong> y poner mas opciones de mas de un video

/*
    Ingresa horas
        <input type="number" id='hora-ingresado'>
        Ingresa Minutos
        <input type="number" id='minuto-ingresado'>
        Ingresa segundos
        <input type="number" id='segundo-ingresado'>
        <input type="submit" value='Ingresar' id='boton-ingresar'>
        <br>

        <br>


*/