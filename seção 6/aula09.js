// Aprendendo Funções Construtoras

function Pessoa(n, s, raca = 'Humano'){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade =0;
    let nome = n;
    let sexo = s;
    
    //atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    //método privado só conseguimos fazer uso dentro da função construtora
    let imprimirDados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
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

// Instanciando um objeto
const joao = new Pessoa("João", "Masculino");
console.log(joao)

console.log(joao.peso); // privado

console.log(joao.raca)


joao.fazerAniversario(); // publico
joao.fazerAniversario(); // publico

// Instanciar um novo objeto

const maria = new Pessoa("Maria", "Feminino");

maria.fazerAniversario();
console.log(maria.getIdade());

console.log(typeof(Pessoa)); // aparece como function - ""Pessoa" é uma função construtora
console.log(typeof(maria)); // object
