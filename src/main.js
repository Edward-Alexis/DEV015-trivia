/*
  Aquí va tu JavaScript
*/

function corregir() {
    let aciertos = 0;

    // Pregunta 1: La respuesta correcta es $24
    if (document.querySelector('input[name="p1"]:checked')?.value === '1') {
        aciertos++;
    }

    // Pregunta 2: La respuesta correcta es 245 kilómetros
    if (document.querySelector('input[name="p2"]:checked')?.value === '2') {
        aciertos++;
    }

    // Pregunta 3: La respuesta correcta es 147 naranjas
    if (document.querySelector('input[name="p3"]:checked')?.value === '2') {
        aciertos++;
    }

    // Pregunta 4: La respuesta correcta es 425 chocolates
    if (document.querySelector('input[name="p4"]:checked')?.value === '3') {
        aciertos++;
    }

    // Pregunta 5: La respuesta correcta es 22 litros
    if (document.querySelector('input[name="p5"]:checked')?.value === '1') {
        aciertos++;
    }

    // Mostrar la cantidad de aciertos
    document.getElementById('resultado').textContent = aciertos;

    // Definir la variable 'nombre' (puedes capturarla desde un input si es necesario)
    let nombre = "Usuario"; // Cambia esto según cómo estés obteniendo el nombre del usuario

    if (aciertos === 5) {
        alert(`¡Felicitaciones ${nombre} por completar con éxito esta trivia!`);
    } else {
        alert(`${nombre}, has acertado ${aciertos} de 5 preguntas. ¡Inténtalo de nuevo!`);
    }
}
