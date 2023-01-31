// Delcarando Classes
// Aprendendo declarar os atributos e o método construtor
// declara os atributos de uma classe dentro do constructor

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Carro{
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
}


const joao = new Pessoa('João', 'Lima');
console.log(joao)

const fit = new Carro('Hatch')
console.log(fit)