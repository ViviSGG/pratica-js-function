/* Exercício 10: Calcular Fatorial */

function calculo(num) {

    let fatorial = 1;
    for ( let i = num; i > 1; i -- ) {
        fatorial = fatorial * i;
    }
    return fatorial;
}
    
const num = parseFloat(prompt("Informe o número:"));
const resultado = calculo(num);
document.write(`O Fatorial de ${num} é ${resultado}.`);
