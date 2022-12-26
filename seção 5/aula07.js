// Aprendendo a usar var, let e const
/*
var numero = 42;
console.log(numero)

numero += 18
console.log(numero)
*/

// let => forma mais moderna de declarar variáveis em JS
/*
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
//console.log(valor) //ReferenceError: i is not defined globalmente
*/

// const
// não posso alterar o valor de uma constante

const taxa = 1.44
console.log(taxa)

let res = 45 * taxa
console.log(res)

//taxa = 5 //TypeError: Assignment to constant variable.
//console.log(taxa)

// constante VS Mutação
const curso = {nome: 'Programação em JavaScript', duracao:'2 Anos'}
console.log(curso.nome)
console.log(curso.duracao)
console.log(curso)

//podemos realizar mutação em dados contidos em contante
curso.nome = 'Programação em Python' // alterando o atributo nome dentro da constante curso
console.log(curso)

/* DICAS DE COMO DECLARAR VARIÁVEIS EM JAVASCRIPT
- A variável poderá ser alerada ? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use const
*/

const valor = 5;
for(let i = 0; i < valor; i++){
    console.log(valor - i)
}