// Tratamento de erro com try/catch
// não deixa o programa parar - vai sempre tratar os erros


/*
try {
    console.log(nome)
} catch (e) {
    console.log(`Não foi possível imprimir nome.`)
    console.log(e.name)
    console.log(e.message)
}
*/

// Lançando erros

function dividir(num1, num2){
    if(num1 ===0 || num2 === 0){
        throw(`Os valores devem ser positivos`) // lançando uma exceção (erro)
    }else {
        return num1/num2;
    }
}

try {
    let ret = dividir(8,2)
    console.log(ret)
} catch (error) {
    console.log(`Não foi possível dividir`) // diz o erro por não conseguir dividir por erro
    console.log(error.message) // se tiver o erro vai mostrar qual é 
} finally {
    console.log(`Vamos continuar ...`) // semppre vai exeutar, dando erro ou não
}

//console.log(dividir(8,4))
