class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura**2);
    }

    classificar(){
        const imc = this.calcularIMC();
        if(imc < 18.5){
            return ('abaixo do peso');
        } else if(imc >=18.5 && imc < 25) {
            return ('peso normal');
        } else if(imc >= 25 && imc < 30) {
            return ('acima do peso');
        } else if(imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Mórbida');
        }
    }
}

const jose = new Pessoa('joao', 55, 1.60);
console.log(jose);
console.log(jose.calcularIMC());
console.log(jose.classificar());

const gabriel = new Pessoa('Gabriel', 90, 1.80);
console.log(gabriel);
console.log(gabriel.calcularIMC());
console.log(gabriel.classificar());