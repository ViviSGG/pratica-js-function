/* Exercício 6: Calcular Área do Triângulo */

function area(b, h) {
    return (b * h) / 2;
}
    
const b = parseFloat(prompt("Informe a base:"));
const h = parseFloat(prompt("Informe a altura:"));
const resultado = area(b, h);
document.write(`A área do triângulo é: ${resultado}`);
