// Delcarando Classes
// Aprendendo declarar os atributos e o método construtor
// declara os atributos de uma classe dentro do constructor
// delcarando métodos nas classes
// criando "get" e "set" - métodos manipuladores dos atributos


class Pessoa{
    //atributos
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this.sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    // criando métodos
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro{
    //atributos
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    // não tem "set" pois já é fixado no atibuto - se não fosse fixado teria um "set" para marca também

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    // criando método
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

