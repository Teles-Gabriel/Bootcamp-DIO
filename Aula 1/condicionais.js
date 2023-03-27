const numero = 3;
const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log('numero inválido')
} else if(numeroPar)  {
    console.log('Par')
} else {
    console.log("ímpar")
}