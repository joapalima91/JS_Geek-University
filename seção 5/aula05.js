// usando o filter
// o filter gera um novo array

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros)

//função pra veririfcar se número é par, se o resto da divisão por 2 é igual a 0
function filtrarPares(n){
    return n % 2 ===0;
}
/*
console.log(filtrarPares(3)) // false
console.log(filtrarPares(8)) // true
*/

//função pra veririfcar se número é ímpar
function filtrarImpar(n){
    return n % 2 !== 0;
}

//função pra veririfcar se número é multiplo de 5
function filtrarMultiplos_5(n){
    return n % 5 ===0
}


// vai imprimir o filtro dos números que são pares
var res = numeros.filter(filtrarPares)
console.log(res)

// vai imprimir o filtro dos números que são ímpares
res = numeros.filter(filtrarImpar)
console.log(res)


// vai imprimir o filtro dos números que são multiplos de 5
res = numeros.filter(filtrarMultiplos_5)
console.log(res)

console.log('--------------------------------------------------')

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
]

console.log(alunos)

function filtarNotasMaiores_8(aluno){
    return aluno.nota > 8
}

function filtarNotasMaiores_7(aluno){
    return aluno.nota > 7
}

var filtrados = alunos.filter(filtarNotasMaiores_8)
console.log(filtrados)
console.log(filtrados.length)


filtrados = alunos.filter(filtarNotasMaiores_7)
console.log(alunos.length)
console.log(filtrados.length)