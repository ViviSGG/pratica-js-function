/* Exercício 3: Calcular Média */

function media(a, b, c, d) {
    return (a + b + c + d) / 4;
}
    
const nota1 = parseFloat(prompt("Informe a primeira nota:"));
const nota2 = parseFloat(prompt("Informe a segunda nota:"));
const nota3 = parseFloat(prompt("Informe a terceira nota:"));
const nota4 = parseFloat(prompt("Informe a quarta nota:"));
const resultado = media(nota1, nota2, nota3, nota4);
document.write(`A média das notas é: ${resultado}`);