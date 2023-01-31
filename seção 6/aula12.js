// Recapitulando

console.log(somar(4,6));

/*
// forma literal - forma padrão de escrita de função
function somar(n1, n2){
    return n1 + n2;
}
*/

// não é a forma literal de declarar função
let somar = function(v1, v2){ // função anonima
    return v1+v2;
} // ReferenceError: Cannot access 'somar' before initialization