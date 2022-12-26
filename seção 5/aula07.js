// Aprendendo a usar var, let e const

var numero = 42;
console.log(numero)

numero += 18
console.log(numero)

// let => forma mais moderna de declarar variáveis em JS
let numero2 = 42
console.log(numero2)

numero2 += 18;
console.log(numero2)

let nome ='Geek'
console.log(nome)

nome = 'Universaty'
console.log(nome)

for(let i=0; i<5; i++){
    let valor = i * 2
    console.log(valor)
}
console.log(valor) //ReferenceError: i is not defined globalmente