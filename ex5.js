/* Exercício 5: Verificar Triângulo */

function triangulo(a, b, c) {

    // return ((a + b) > c) || ((a + c) > b) || ((b + c) > a) 
    
    if ((a + b) > c) {
        return "Forma um triângulo!";
    } else if ((a + c) > b) {
        return "Forma um triângulo!";
    } else if ((b + c) > a) {
        return "Forma um triângulo!";
    } else {
        return "Não forma um triângulo!";
    }
}
    
let reta1 = parseFloat(prompt("Informe a primeira reta:"));
let reta2 = parseFloat(prompt("Informe a segunda reta:"));
let reta3 = parseFloat(prompt("Informe a terceira reta:"));

let resultado = triangulo(reta1, reta2, reta3);
document.write(resultado);