// Aprendendo Funções
function somar(num1, num2){
    return num1 + num2;
}

//console.log(somar(5,6)) // executa e imprime a soma da função somar

//exemplo 1
const executar = somar;
//console.log(executar(8,7))

// exemplo 2
function subtrair(num1, num2){
    return num1 - num2;
}

function fazAlgo(num1, num2, algo){
    return algo(num1, num2);
}

//console.log(fazAlgo(5, 1, somar))
//console.log(fazAlgo(8, 3, subtrair))

// exemplo 3
function outra(z){
    return z;
}

const ret = outra(somar)
//console.log(ret(3,6));


function mensagem(){
    console.log(`Evolua seu lado geek!`)
}

mensagem() // executando a função

//let ret2 = mensagem();
//console.log(ret2);

let valores = [1, 3.4, true, somar]

for(let i=0; i<valores.length; i++){
    console.log(typeof(valores[i]));
}