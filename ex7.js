/* Exercício 7: Verificar Maior Número */

function maior(a, b) {

    if ( a > b ) {
        return `${a} é maior que ${b}!`;
    } else {
        return `${b} é maior que ${a}!`;
    }
}
    
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const resultado = maior(num1, num2);
document.write(resultado);
