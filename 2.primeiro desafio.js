
/* Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
1 - Preço do combustível;
2 -  Gasto médio do gasto pelo carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustivel = 4.89;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro ;
const custoViagem = precoCombustivel * litrosConsumidos ;

console.log('O preço da sua viagem foi');
console.log(custoViagem);






