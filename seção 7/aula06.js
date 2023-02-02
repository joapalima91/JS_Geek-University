// Delcarando Classes
// Aprendendo declarar os atributos e o método construtor
// declara os atributos de uma classe dentro do constructor
// delcarando métodos nas classes
// criando "get" e "set" - métodos manipuladores dos atributos

class Pessoa {
  //atributos
  constructor(nome, sobrenome) {
    this._nome = nome;
    this._sobrenome = sobrenome;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get sobrenome() {
    return this.sobrenome;
  }

  set sobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  // criando métodos
  falar(msg) {
    console.log(`${this.nome} está falando ${msg}`);
  }

  comer() {
    console.log(`${this.nome} está comendo...`);
  }

  beber() {
    console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
  }
}

class Carro {
  //atributos
  constructor(modelo) {
    this._marca = "Honda";
    this._modelo = modelo;
  }

  get marca() {
    return this._marca;
  }

  // não tem "set" pois já é fixado no atibuto - se não fosse fixado teria um "set" para marca também

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  // criando método
  imprimir() {
    console.log(`${this.marca} ${this.modelo}`);
  }
}

// Instanciação de Objetos - Forma 1
/*
const curso = new Object();
curso.nome = 'Programação em JavaScript';
curso.preco = 27.99;

console.log(curso);

curso['qtd-alunos'] = 999;
console.log(curso);

delete curso['qtd-alunos'];
delete curso['preco'];
console.log(curso)
*/

// Instanciação de Objetos - Forma 2 - Objeto Literal

const programa = {
  nome: "Photoshop",
  preco: 8999.99,
  fabricante: {
    nome: "Adobe",
    contato: "contato@adobem.com",
    endereco: {
      rua: "Da paz, 45",
      bairro: "Nova Lima",
      cidade: "São Paulo",
    },
    filiais: [{ cidade: "Rio de Janeiro" }, { cidade: "Recife" }],
  },
};

/*
console.log(programa);
console.log(programa.nome); // photoshop
console.log(programa.fabricante.nome); // Adobe
console.log(programa.fabricante); // nome, contato, endereço e filiais
console.log(programa.fabricante.filiais.length); // 2

console.log(programa['fabricante']['filiais']); //[ { cidade: 'Rio de Janeiro' }, { cidade: 'Recife' } ]
console.log(programa['fabricante']['filiais'].length); //2

programa.nome = 'Playstation OS'; // alterando nome para Playstation OS
console.log(programa.nome)
console.log(programa)

delete programa.fabricante.filiais; // deletando as filias dentro de fabricante
console.log(programa.fabricante.filiais); //undefined
console.log(programa.fabricante.filiais.length); // TypeError
*/

// Instanciação de Objetos - Forma 3 - Objeto Literal

