/* Exercício 2: Verificar Número Par */

function resto(a) {
    return a % 2;
}

const num = parseFloat(prompt("Informe o número:"));
const resultado = resto(num);

if (resultado == 1) {
    document.write(`O número ${num} é Impar!`);
} else {
    document.write(`O número ${num} é Par!`);
}
