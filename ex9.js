/* Exercício 9: Verificar Número Primo */

function primo(num) {
    
    if (num < 2 ) {
        return `${num} não é primo!`;
    } else if ( num == 2 || num == 3) {
        return `${num} é primo!`;
    } else if ((num % 2) == 0) {
        return `${num} não é primo!`;
    } else if ((num % 3) == 0) {
        return `${num} não é primo!`;
    } else if ((num % num) == 0) {
        return `${num} é primo!`;
    }
}
    
const num = parseInt(prompt("Informe o número:"));
const resultado = primo(num);
document.write(resultado);
