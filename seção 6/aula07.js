// aprendendo funções lambda(anônima) - função que não tem nome

let numeros = [1,2,3,4,5,6]

function dobrar(valor){
    return valor * 2;
}

let res1 = numeros.map(dobrar); // maps cada um dos elementos do aray "numeros", passa como parâmetros para função "dobrar" e vai transformar esses valores e vai imprimir um novo array

console.log(numeros);
console.log(res1);

// Funções Anônimas - Lambdas (Funções Lambdas)

let res2 = numeros.map(function(valor){ // função sem nome
    return valor * 2;
});

console.log(res2);

function somar(v1, v2){
    return v1 + v2;
}

let mostrar = function(n1, n2, calculo = somar){ // função anônima
    console.log(calculo(n1, n2));
}

mostrar(2,4); //6
mostrar(6,9, somar); //15
mostrar(3,6, function(n1, n2){ // função anônima
    return n1 + n2; //9
})

mostrar(3,6, (v1, v2) => v1*v2); //arrow function
