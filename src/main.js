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
}
