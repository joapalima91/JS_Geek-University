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
    return this._sobrenome;
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

  // marca não tem "set" pois já é fixado no atibuto - se não fosse fixado teria um "set" para marca também

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
/*
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
*/

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
/*
const pessoa = {};
console.log(typeof(pessoa)); // object

pessoa.nome = 'João Lima';
console.log(pessoa);
*/

// Instanciação de Objetos - Forma 4 - Função Construtora
/*
function Lampada(cor){
  this.cor = cor;
}

const l1 = new Lampada('Branca'); // instanciando objeto
console.log(l1); // imprime objeto
console.log(typeof(l1)); // imprime o tipo
*/

// Instanciação de Objetos - Forma 5 - Objeto a partir das nossas classes
/*
const p1 = new Pessoa('João', 'Sobrenome');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); // função get
console.log(p1.sobrenome); // função get

p1.nome = 'Maria'; // metodo set - setando um novo nome
console.log(p1); // imprimindo maria como nome

p1.falar('oi totonha');
p1.comer();
p1.beber();

p1.nome = 'Eva';
console.log(p1); 
p1.falar('Oi Janjão');
p1.comer();
p1.beber();
*/

const fit = new Carro('Fit');
fit.imprimir(); // imprime marca e modelo - Honda Fit

const civic = new Carro('Civic');
civic.imprimir(); // imprime marca e modelo - Honda Civic

