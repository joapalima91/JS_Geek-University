// destructing com array
// extrai dados dos containers

const numeros = [1, 3, 5, 7];
const [num1, num2, num3, num4] = numeros

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

console.log('------------------------------------------')

// Podemos descartar valores
const [n1, ,n3, n4] =numeros

console.log(n1)
console.log(n3)
console.log(n4)

console.log('------------------------------------------')

// Podemos colocar valor default que será usado caso não haja no container
const [nu1, nu2, nu3, nu4 = 34, nu5 = 99] = numeros // caso não exista o valor no 'nu4' por o valor 34 caso não exista o 'nu5' por o valor 99
console.log(nu1)
console.log(nu2)
console.log(nu3)
console.log(nu4) // vai imprimir valor 7, pois existe posição no array com valor 7
console.log(nu5) // vai imprimir valor 99, pois NÂO existe posição no array

console.log('------------------------------------------')

// Destruturing com objeto
const produto = {
    nome: 'Playtation 4',
    preco: 1678.44
}

const {nome, preco} = produto
console.log(nome)
console.log(preco)

console.log(`${nome} custa ${preco}`)