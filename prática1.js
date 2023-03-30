function writeName(nome) {
    return `O nome é ${nome}`;
}


function verificarIdade(idade) {
    if(idade >= 18) {
        console.log(` ${writeName('Gabriel')} e é maior ${idade}`)
    } else {
        console.log(`Menor ${idade}`)
    }
}

verificarIdade(18);