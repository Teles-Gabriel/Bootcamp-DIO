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

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é a pessoa mais velha que ${p2.nome} `);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é a pessoa mais velha que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}

const vitor = new Pessoa('vitor', 21);
const gabriel = new Pessoa('gabriel', 22);

compararPessoas(vitor,gabriel);