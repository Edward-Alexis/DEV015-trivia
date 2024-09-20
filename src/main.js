/*
  Aquí va tu JavaScript
*/
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

    let nombre = "Usuario";

    if (aciertos === 5) {
        alert(`¡Felicitaciones ${nombre} por completar con éxito esta trivia!`);
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
        let nombre = prompt("¡Felicitaciones! Por favor, introduce tu nombre:");
        alert(`¡Felicitaciones ${nombre} por completar con éxito esta trivia!`);
    }
}