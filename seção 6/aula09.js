// Aprendendo Funções Construtoras

function Pessoa(n, s){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade =0;
    let nome = n;
    let sexo = s;
    
    //atributo público pode ser acessado fora da função construtora
    this.raca = 'Humano';

    //método privado só conseguimos fazer uso dentro da função construtora
    let imprimirDados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexp: ${sexo}`);
    }

    // método público conseguimos acessar fora da função construtora
    this.fazerAniversario = function(){
        idade += 1;
        imprimirDados();
    }

    this.getIdade =function(){
        return idade;
    }

}



