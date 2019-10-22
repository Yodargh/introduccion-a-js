
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $BOTON_INGRESAR = document.querySelector('#boton-ingresar');


$BOTON_INGRESAR.onclick = function () {
    const $HORAS = document.querySelector('#hora-ingresado').value;
    const $MINUTOS = document.querySelector('#minuto-ingresado').value;
    const $SEGUNDOS = document.querySelector('#segundo-ingresado').value;

    const tiempoTotal = ($HORAS * 60 * 60) + ($MINUTOS * 60) + $SEGUNDOS
    document.querySelector('#resultado').textContent = tiempoTotal

    return false
}

// falta el <strong> y poner mas opciones de mas de un video
