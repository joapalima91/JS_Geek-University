// aprendendo funçoes Closures (contexto léxico de uma função)
/*
let xuxa = 'Global'; // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa); // local
}

outra();
*/

let variavel = "Global";

function externa(){
    let variavel = 'Local'; // se essa variável não existir, vai retornar "Global"

    function interna(){
        return variavel;// retorno - local
    }
    return interna;
}

let executa = externa();

console.log(executa()); // local