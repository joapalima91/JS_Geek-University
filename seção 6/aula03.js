function calcularIdade1 (anoNascimento){
    const data = new Date(); // gera a data atual
    const idade = data.getFullYear() - anoNascimento; // vai calcular a idade
    return idade; // aqui recupera(retorna a idade e de pra fazer outras funcionalidades no código)
}

function calcularIdade2(anoNascimento2){
    const data = new Date();
    const idade = data.getFullYear() - anoNascimento2; // vai calcular a idade
    console.log(idade);
}


console.log(calcularIdade1(1991));

calcularIdade2(1992); // executando a função anoNascimento2

function somar (num1, num2){
    return num1 + num2;
}

console.log(somar(4)); // NaN
console.log(somar(4,6)); // 10
console.log(somar(4,6,8)); // 10 
console.log(somar(4,6,8,3,2,1,19));//10