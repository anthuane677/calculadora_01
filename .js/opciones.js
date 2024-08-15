//Aqui le agregue los 4 casos, de suma, resta, division, multiplicacion

export function sumar(a, b){
    return a + b;
}


export function restar(a, b){
    return a - b;
}


export function dividir(a, b){
    if (b ==0){
        return 'Introduce un número mayor a 0';
    }
    return a / b;
}


export function multiplicar(a, b){
    return a * b;
}