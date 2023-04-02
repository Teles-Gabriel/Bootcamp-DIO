/**
 Uma sala contem 5 alunos e para cada aluno foi sorteado um numero
 de 1 a 100
 faça um programa que receba os 5 numeros sorteados para os alunos
 e mostre o maior numero sorteado

 dados de entrada:
 5
 50
 10
 98
 23
 saida:
98
 */

const {get, print} = require("./exemplo1");
const numerosSorteados = [];

for (let i = 5; i < 5; i++) {
    const numeroSorteado = get();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);