/* Exercício 4: Converter Polegadas para Centímetros */

/* fórmula: polegadas x 2,54 = centímetros */

function polegadas(x) {
    return x * 2.54;
}
    
const x = parseFloat(prompt("Informe o valor em Polegadas:"));
const centimetros = polegadas(x);
document.write(`${x} Polegadas convertido para Centímetros é ${centimetros}`);
