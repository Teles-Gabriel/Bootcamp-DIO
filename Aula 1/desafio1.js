/*
Fazer um programa para calcular o valor gasto de combustivel durante uma viagem
dados os valores:
    preço do etanol
    Preço da gasolina
    Tipo de combustivel
    gasto médio do carro
    distancia em km

Imprima o valor que será gasto em combustivel para realizar a viagem
*/
const tipoCombustivel = 'Gasolina';
const valorEtanol = 4.80;
const valorGasolina = 5.50;
const distanciaPercorrida = 50; //em Km
const gastoMedio = 9; // km/litro
var quantidadeCombustivel;
var valorGasto;

quantidadeCombustivel = distanciaPercorrida/gastoMedio ;


if(tipoCombustivel === 'Etanol'){
    valorGasto = quantidadeCombustivel * valorEtanol;

    console.log(`A quantidade de combustível necessária para percorrer ${distanciaPercorrida} Km
    é ${quantidadeCombustivel.toFixed(2)} l, o litro de ${tipoCombustivel} custa ${valorEtanol.toFixed(2)}, a viagem custará ${valorGasto.toFixed(2)}.`)
   
} else {
    valorGasto = quantidadeCombustivel * valorGasolina;

    console.log(`A quantidade de combustível necessária para percorrer ${distanciaPercorrida} Km
    é ${quantidadeCombustivel.toFixed(2)} l, o litro de ${tipoCombustivel} custa ${valorGasolina.toFixed(2)}, a viagem custará ${valorGasto.toFixed(2)}.`)
}