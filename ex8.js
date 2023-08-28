/* Exercício 8: Calcular Desconto */

function calculoDesconto(x, y) { 
    let desconto = x * ( y / 100 );
    return x - desconto;
}
    
const produto = parseFloat(prompt("Informe o valor do produto R$:"));
const porcentagem = parseFloat(prompt("Informe o valor do desconto (%):"));
const resultado = calculoDesconto(produto, porcentagem);
document.write(`O produto com o desconto de ${porcentagem}% é R$${resultado}.`);
