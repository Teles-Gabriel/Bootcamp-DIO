class Pessoa {
    nome;
    idade;
//Constructor

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
}

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade ´e ${this.idade}`);
    }
}

const vitor = new Pessoa('vitor', 20);
const Gabriel = new Pessoa('gabriel', 22);

console.log(vitor);
console.log(Gabriel);

// Instancias para criar novas pessoas
/*
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const Gabriel = new Pessoa();
Gabriel.nome = 'Gabriel';
Gabriel.idade = 22;

vitor.descrever();
Gabriel.descrever();
*/