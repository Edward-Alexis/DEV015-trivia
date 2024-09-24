document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("buttonWelcome");

    button.addEventListener('click', function (event) {
        event.preventDefault(); // Previene el comportamiento por defecto del botón

        let nombre_jugador = document.getElementById('nombre').value; // Obtener el valor del input
        console.log("NOMBRE", nombre_jugador); // Imprimir el nombre
        nombre_jugador = nombre_jugador.toUpperCase(); // Convertir a mayúsculas
        localStorage.setItem('nombreJugador', nombre_jugador); // Almacenar en localStorage

        change(); // Llamar a la función change
    });

    function change() {
        window.location.href = 'escoger.html'; // Redirigir a la nueva página
    }
});

function seleccionarNivel(nivel) {
    if (nivel === 'facil') {
        window.location.href = 'welcome.html';
    } else if (nivel === 'dificil') {
        window.location.href = 'pesadilla.html';
    }
}
/**
 Aqui va el JS de facil
 */
function corregir_facil() {
    let aciertos = 0;

    if (document.querySelector('input[name="p1"]:checked')?.value === '1') {
        aciertos++;
    }

    if (document.querySelector('input[name="p2"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p3"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p4"]:checked')?.value === '3') {
        aciertos++;
    }

    if (document.querySelector('input[name="p5"]:checked')?.value === '1') {
        aciertos++;
    }

    document.getElementById('resultado').textContent = aciertos;


    if (aciertos === 5) {
        alert(`¡Felicitaciones por completar con éxito esta trivia! Te invito a probar el modo pesadilla ,¿Te Atreves?`);
        window.location.href = "pesadilla.html";
    } else {
        alert(`${nombre}, has acertado ${aciertos} de 5 preguntas. ¡Inténtalo de nuevo!`);
    }
}

/**
 Aqui va el JS de pesadilla
 */
function corregir_dificil() {
    let aciertos = 0;

    if (document.querySelector('input[name="p1"]:checked')?.value === '3') {
        aciertos++;
    }

    if (document.querySelector('input[name="p2"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p3"]:checked')?.value === '2') {
        aciertos++;
    }

    if (document.querySelector('input[name="p4"]:checked')?.value === '1') {
        aciertos++;
    }

    if (document.querySelector('input[name="p5"]:checked')?.value === '3') {
        aciertos++;
    }

    document.getElementById('resultado').textContent = aciertos;

    if (aciertos === 5) {
        let confirmacion = confirm('¡Felicitaciones por completar con éxito esta trivia! ¿Te gustaría volver a intentarlo?');
        if (confirmacion) {
            window.location.href = "escoger.html"; // Redirige si hace clic en "Aceptar"
        } else {
            // No hace nada si hace clic en "Cancelar"
            console.log("El usuario canceló.");
        }
    }
}    