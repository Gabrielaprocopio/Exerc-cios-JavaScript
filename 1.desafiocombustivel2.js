/* Faça um programa para calcular o valor de uma viagem.

Você terá cinco variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
2 - Gasto médio do gasto pelo carro por KM;
3 - Distância em KM da viagem;

*/

const precoGasolina = 4.89;
const precoEtanol = 3.90;
const kmPorLitro = 10;
const distanciaEmKm = 180;
const tipoCmbustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGastoG = litrosConsumidos * precoGasolina;
const valorGastoE = litrosConsumidos * precoEtanol;

if (tipoCmbustivel === 'Etanol') {
    console.log(valorGastoE);
} else {
    (tipoCmbustivel === 'Gasolina')
    console.log(valorGastoG);
}