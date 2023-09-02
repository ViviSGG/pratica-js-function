/*  Cálculo do valor da conta em um bar */

/* Descrição: Cinco amigos combinaram de ir a um bar tomar chopp.
O bar dá desconto (happy hour) até às 19h, sendo que somente 2 amigos
do grupo conseguiram chegar ao bar antes das 19h e tomaram 4 chopps
cada.
O desconto é não cobrar os 10% O restante do grupo chegou após o
happy hour e não conseguiram mais o desconto.
Elaboe um algoritmo em JavaScript que calcule o valor dessa conta.
Exiba um formulário em HTML no qual um gar¸con insira os produtos e
emida um relatário (em HTML) com a conta final a ser paga.
 */

function calculoTaxa(x) { 
    let taxa = x * ( 10 / 100 ); /* ( 10 / 100 ) == 0,10 == 10%*/
    return x + taxa;
}
    
let preco = 5;
let consumo = 8; 
let comDesconto = consumo * preco;

const resposta = prompt(`Á ${consumo} Chopps em conta, deseja pedir mais? (s/n)`);

if (resposta == "s") {
    let consumoTaxa = parseFloat(prompt(`Quantos copos deseja? (Chopp 1 copo - R$${preco},00):`)) 
    let SemDesconto = consumoTaxa * preco;
    let total = comDesconto + calculoTaxa(SemDesconto);;
        document.write(`Total da conta é R$${total}.`);
} else {
    document.write(`Total da conta é R$${comDesconto}.`);
}




