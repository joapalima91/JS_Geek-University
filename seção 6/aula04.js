// Funçoes com parâmetros variáveis e valor padrão

function somar1(){
    let soma = 0;
    for(let i=0; i< arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}
/*
console.log(somar1()); // 0
console.log(somar1(2)); // 2
console.log(somar1(2,5)); // 7
console.log(somar1(5,3,9)); // 17
console.log(somar1(2,4,6,8,12)); // 32
*/
console.log('----------------------------------');

function imprimeValores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i])
    }
}

//imprimeValores();
//imprimeValores(4,6);
//imprimeValores(4,6,8);
//imprimeValores(4,6,8,12,44,56);
//imprimeValores(3,6,8,12,44,56);

//Gambiarra 1
function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    return num1 + num2 + num3;
}
/*
console.log(somar2(4,5,6)) // 15
console.log(somar2()) // 6
console.log(somar2(2)) // 7
console.log(somar2(2,2)) // 7
console.log(somar2(2,2,2)) // 7
console.log(somar2(0,0,0)) // era pra retornar 0, mas ele retorna 6
*/

//Gambiarra 2
function somar3(num1, num2,num3){
    num1 = isNaN(num1) ? 1 : num1; // verifica se é "not a number", se não for pega o valor informado em num1
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1+num2+num3;
}
/*
console.log(somar3(4,5,6)) // 15
console.log(somar3()) // 6
console.log(somar3(2)) // 7
console.log(somar3(2,2)) // 7
console.log(somar3(2,2,2)) // 7
console.log(somar3(0,0,0)) // 0
*/

// FORMA ATUAL - RECOMENDADA
function somar4(num1=1, num2=2, num3=3){
    return num1+num2+num3;
}
/*
console.log(somar4(4,5,6)) // 15
console.log(somar4()) // 6
console.log(somar4(2)) // 7
console.log(somar4(2,2)) // 7
console.log(somar4(2,2,2)) // 7
console.log(somar4(0,0,0)) // 0

console.log(somar4('a','b','c')) // 'abc'
console.log(somar4(true, false,'c')) //1c
console.log(somar4(2, true, false)) // 3 + (true é igual a 1) + (false é igual a 0)
*/

function somar5(num1=1, num2=2, num3=3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1+num2+num3;
    } else {
        return 'Não foi possível efetuar a soma!';
    }
}


console.log(somar5(4,5,6)) // 15
console.log(somar5()) // 6
console.log(somar5(2)) // 7
console.log(somar5(2,2)) // 7
console.log(somar5(2,2,2)) // 7
console.log(somar5(0,0,0)) // 0

console.log(somar5('a','b','c')) // 'abc'
console.log(somar5(true, false,'c')) //1c
console.log(somar5(2, true, false)) // 3