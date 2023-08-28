/* Exercício 1: Somar Dois Números */

function somar(a, b) {
    return a + b;
}
    
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const resultado = somar(num1, num2);
document.write(`A soma é: ${resultado}`);
