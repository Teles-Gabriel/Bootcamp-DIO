function juros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros/100) * valor;
    
    return valor + valorDeAcrescimo
}

console.log(juros(100, 10));
console.log(juros(100, 15));
console.log(juros(100, 20));