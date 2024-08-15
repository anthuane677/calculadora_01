import {sumar, restar, multiplicar, dividir} from './opciones.js';

function calcular(operacion) {
    let num1 = parseFloat(document.getElementById('A').value);
    let num2 = parseFloat(document.getElementById('B').value);
    let resultado;

        switch (operacion) {
            case 'suma':
                resultado = sumar(num1, num2);
                break;
            case 'resta':
                resultado = restar(num1, num2);
                break;
            case 'multiplicacion':
                resultado = multiplicar(num1, num2);;
                break;
            case 'division':
                resultado = dividir(num1, num2);
        }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
window.calcular = calcular;