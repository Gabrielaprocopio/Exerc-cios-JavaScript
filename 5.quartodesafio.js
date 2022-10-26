/*
 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 180;
const metodoPagamento = 4

if (metodoPagamento === 1){
    console.log('O valor da sua compra no débito é');
    console.log((precoEtiqueta * 0,9 ).toFixed(2));
} else if (metodoPagamento === 2) {
    console.log('O valor da sua compra no dinheiro ou no pix é');
    console.log((precoEtiqueta * 0,85) .toFixed(2));
} else if (metodoPagamento === 3) {
    console.log('O valor da sua compra em duas vezes no crédito é');
    console.log(precoEtiqueta);
} else if (metodoPagamento === 4) {
    console.log('O valor da sua compra acima de duas vezes no crédito é');
    console.log((precoEtiqueta * 1.1).toFixed(2));
}
