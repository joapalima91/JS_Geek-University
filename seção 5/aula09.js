// Aprendendo e usando Hoisting
// só acontece quando é declarado com o var, com let apresenta erro

console.log(nome) //undefined - aqui ocorre o Hoisting(içamento)

var nome = 'João' // declarando e inicialinado a variável
console.log(nome)

