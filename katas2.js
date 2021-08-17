// comece a criar a sua função add na linha abaixo
// criar function add (argumento1, argumento 2) e somar

function add(argumento1, argumento2) {
    let soma = argumento1 + argumento2
        return soma;
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(argumento1, argumento2){
    let resultado = 0;
    for (let i = 1; i <= argumento2; i++) {
        resultado = add(resultado,argumento1);
    }
        return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(numero,exponente){
    let resultado = 1
    for (let i = 1; i<=exponente; i++){
        resultado = multiply(resultado, numero);
}
    return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(numero) {
    let resultado = 1
    for (let i = 0; i < numero; i++) {
        let fator = numero-i;
        resultado = multiply(resultado, fator);
    }
    return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
