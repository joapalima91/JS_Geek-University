// aprendendo a usar reduce
var precos = [4.66, 3.78, 9.78, 1.34, 5.32]
console.log(precos)

var soma = 0

for(var i=0; i < precos.length; i++){
    soma = soma + precos[i];
}
//console.log(soma)

var soma = 0 // temos que zerar novamente para não pegar o valor da soma no for
precos.forEach(function(Valor){
    soma += Valor
})
//console.log(soma)

// fução para usar o reduce abaixo
function somar(anterior, atual){
    return anterior + atual
}

var ret = precos.reduce(somar)
//console.log(ret)

/* COMO FUNCIONA O REDUCE
[4.66, 3.78, 9.78, 1.34, 5.32]

1ª execução:
    pega os 2 primeiros valores (índice 0 e índice 1), soma e retorna este valor;

Nas demais execuções:
    pega o retorno da execução anterior e o próximo valor(indice 2...)

1ª => 4.66 + 3.78 -> 8.44
2ª => 8.44 + 9.78 -> 18.22
3ª => 18.22 + 1.34 -> 19.56
4ª => 19.56 + 5.32 -> 24.88

*/

// Exemplo map/reduce
function adicionarTaxa(valor){
    return valor + 5;
}

// adiciona o valor de 5 em cada valor e depois faz a soma
var ret = precos.map(adicionarTaxa).reduce(somar)
console.log(ret)

// Exemplo filter/map/reduce
function precoMaior_4(valor){
    return valor > 4;
}
/*
1ª => aplicou filtro dos valores maiores que 4
2ª => map pegou array com 3 elementos e adicionou a taxa de 5
3ª => reduce realizou a soma dos elementos = 34.76
*/
ret = precos.filter(precoMaior_4).map(adicionarTaxa).reduce(somar)
console.log(ret)