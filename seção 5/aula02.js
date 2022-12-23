/* CRIANDO VETORES
// forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia', 'João', 'Eva')
console.log(alunos)
alunos.sort() // ordena o array de string - não funciona com números
console.log(alunos) // imprime ordernado

console.log('--------------------------------------------------')

// forma 2 == RECOMENDADA
let vet = [12, 24, 36, 48, 52]

console.log(vet) // imprime o array

console.log(vet[2]) // imprime na posção 2

console.log('--------------------------------------------------')
*/

/*
var precos = [123.55, 42.27, 546.99, 23.12]
console.log(precos)
precos.sort(function(a, b){return a - b}) // função lambda -> para ordenação
console.log(precos)
console.log('--------------------------------------------------')
*/

/*
console.log("Valor inicial do array");
var idades = [5, 1, 8, 12, 78, 44];
//console.log(idades)
idades.sort(function (a, b) {
  return a - b;
}); // função lambda -> para ordenação
//console.log(idades)

// deletando dados de um array
delete idades[3]; // deleta idade no índice 3, que no caso é o 12
//console.log(idades)

idades[3] = 12; // adinciona idade 12 no índice 3
console.log(idades);

console.log("--------------------------------------------------");
*/
/*
//deletar dado sem deixar com espaço vazio no array

idades.splice(3, 1) // a partir do índice 3, delete 1 elemento --- deletou índice 12
console.log(idades)
console.log('--------------------------------------------------')
idades.splice(3, 0, 56, 89) // a partir do índice 3, não delete nenhum, mas adicione 56,89
console.log(idades)
*/

/*
// Iterar em um array
console.log('Imprimindo os valores com um for')
for (let i = 0; i < idades.length; i++) {
    console.log(idades[i]);
    
}
*/

/*
//removendo elementos da última posição do array
idades.pop()
console.log(idades)

var ret = idades.pop() // remove o último elemento do array
console.log(ret) // imprime o elemento removido
console.log(idades) // imprime o array atualizado sem o último elemento
*/

/*
//removendo o primeiro elemento do array
idades.shift() // remove o primeiro elemento do array
console.log(idades)

var ret = idades.shift() // remove o primeiro elemento do array
console.log(ret) // imprime o elemento removido
console.log(idades)
*/

/*
// Inserindo elementos no início de um array
idades.unshift(99)
console.log(idades)
*/

/*
// Inserindo elementos no finalo de um array
idades.push(99)
console.log(idades)
*/

/*
// retorna um novo array a partir do índice informado
var novo = idades.slice(3) // pega os valores do arrya a partir do índice 3
console.log(novo)
var novo = idades.slice(1 ,2) //a partir do índice 1, pegue até o índice 2 sem incluílo
console.log(novo)
*/

/*
// CONCATENANDO VETORES

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares) // concatena os valores ímpares depois dos pares
console.log(rest)

var rest2 = impares.concat(pares) // concatena os valores pares depois dos ímpares
console.log(rest2)

rest.sort(function(a,b){return a - b}) // ordena os vetores
console.log(rest)
*/

/*
// Matrizes
*/

//4 x 4
var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(tabuleiro) // imprime a matriz

console.log('--------------------------------------------------')

console.log(tabuleiro[0][0]) // linha 1 e coluna 1 -> 1
console.log(tabuleiro[2][2]) // linha 2 e coluna 2 -> 11
