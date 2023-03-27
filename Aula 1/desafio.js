/*
Fazer um programa para calcular o valor gasto de combustivel durante uma viagem
dados os valores:
    preço do combustivel
    gasto médio do carro
    distancia em km

Imprima o valor que será gasto em combustivel para realizar a viagem
*/

const preçoCombustivel = 5.50;
const distanciaPercorrida = 50; //em Km
const gastoMedio = 9; // km/litro
var quantidadeCombustivel;
var valorGasto;

quantidadeCombustivel = distanciaPercorrida/gastoMedio ;

valorGasto = quantidadeCombustivel * 5.50 ;

console.log(`A quantidade de combustível necessária para percorrer ${distanciaPercorrida} Km
 é ${quantidadeCombustivel.toFixed(2)} l, o litro custa ${preçoCombustivel.toFixed(2)}, a viagem custará ${valorGasto.toFixed(2)}.`)
