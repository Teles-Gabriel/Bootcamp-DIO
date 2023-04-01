/*
    1- crie uma classe para representar carros
    os carros possuem uma marca, uma cor e um gasto médio por km rodado
    crie um metodo que dado a quantidade de quilometros e o preço
    do combustivel nos retorne o valor gasto em reais para a realizar
    este percurso
*/

class Carro {
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }
    
    gastoMedio(precoCombustivel, distancia){
        return distancia*this.gastoPorKM * precoCombustivel;
    }
}

const palio = new Carro('Fiat','vermelho',1/12);
console.log(palio);
console.log(palio.gastoMedio(5,70));

const foguete = new Carro('Nasa', 'azul', 1/2)
console.log(foguete);
console.log(foguete.gastoMedio(51, 11000))