/*  Cálculo do valor da conta em um bar */

/* Descrição: Cinco amigos combinaram de ir a um bar tomar chopp.
O bar d´a desconto (happy hour) at´e `as 19h, sendo que somente 2 amigos
do grupo conseguiram chegar ao bar antes das 19h e tomaram 4 chopps
cada.
O desconto ´e n˜ao cobrar os 10% O restante do grupo chegou ap´os o
happy hour e n˜ao conseguiram mais o desconto.
Elaboe um algoritmo em JavaScript que calcule o valor dessa conta.
Exiba um formul´ario em HTML no qual um gar¸con insira os produtos e
emida um relat´orio (em HTML) com a conta final a ser paga.
 */

function calculoDesconto(x) { 
    let desconto = x * ( 10 / 100 );
    return x - desconto;
}
    
let conta = 2; 
let preco = conta * 5;
let resultado = calculoDesconto(preco);

const resposta = prompt(`Á ${conta} Chopps em conta, deseja pedir mais? (s/n)`);

if (resposta == "s") {
    let extra = parseFloat(prompt("Quantos copos deseja? (Chopp 1 copo - R$5,00):")) 
        let total = resultado + (extra * 5);
        document.write(`Total da conta é R$${total}.`);
} else {
    document.write(`Total da conta é R$${resultado}.`);    
}




