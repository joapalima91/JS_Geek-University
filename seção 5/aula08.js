// template string

let idade = 31;
const nome = 'João';

function soma_3(idade){
    return idade + 3;
}

// Em template strings usa-se a crase, e não aspas simpes ou acento agudo
console.log(`${nome} tem ${idade} anos!!`)

// pega a idade e soma 3 na função criada
console.log(`${nome} tem ${soma_3(idade)} anos!!`)

