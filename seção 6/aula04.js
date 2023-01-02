// Funçoes com parâmetros variáveis e valor padrão

function somar(){
    let soma = 0;
    for(let i=0; i< arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar()); // 0
console.log(somar(2)); // 2
console.log(somar(2,5)); // 7
console.log(somar(5,3,9)); // 17
console.log(somar(2,4,6,8,12)); // 32