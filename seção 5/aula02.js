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

var precos = [123.55, 42.27, 546.99, 23.12]
console.log(precos)
precos.sort(function(a, b){return a - b}) // função lambda -> para ordenação
console.log(precos)

console.log('--------------------------------------------------')

var idades = [5, 1, 8, 12, 78, 44]
console.log(idades)
idades.sort(function(a, b){return a -b}) // função lambda -> para ordenação
console.log(idades)

// deletando dados de um array
delete idades[3]
console.log(idades)
