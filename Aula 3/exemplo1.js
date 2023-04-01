const vitor = {
    nome: 'vitor ] Guerra',
    idade: 25 ,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
    }
};

vitor.altura = 1.69 //adição dinamica de chave e valor

// delete vitor.nome;
/*
console.log(vitor.nome);
console.log(vitor.idade);
*/

console.log(vitor)

console.log('........................................')

const pessoa = {
    nome: 'vitor ] Guerra',
    idade: 25 ,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
    }
};

pessoa.nome = 'Gabriel';
pessoa.idade = 18;
pessoa.descrever();

console.log('...................................');


const atributo = 'idade';

console.log(pessoa[atributo])