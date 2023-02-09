// Objetos e suas funções

const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}
console.log(curso);
/*
console.log(typeof(curso)); // object
console.log(Object.keys(curso)); // imprime as chaves do objeto do objeto no parâmetro [ 'nome', 'horas', 'preco' ]
console.log(Object.values(curso)); // imprime os valores do objeto no parâmetro [ 'Programação em JavaScript', 25, 27.99 ]
console.log(Object.entries(curso)); // imprime chave e valor do objeto, conjunto de array(chave, valor)
*/
/*
// imprimindo chave e valor
Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})
*/
/*
curso.nome = 'Criação de APIs Rest com Django Rest Framework'; // alterando nome do curso
console.log(curso);
*/

/*
// alterando as propriedades do objeto
Object.defineProperty(curso, 'publicacao', {
    enumerable: false,
    writable: false,
    value: '09/02/2023'
});


curso.publicacao = '05/10/2023'; // não vai alterar pois atributo "writable" está "false"
console.log(curso);
console.log(curso.publicacao); //imprimndo atributo
*/

// arrar de objetos
const usuarios = [
    {nome: 'João Lima', empresa: 'Cognizant'},
    {nome: 'Eva', empresa: 'BodyLaser'},
    {nome: 'Daniela', empresa: 'Aker'}
]
console.log(usuarios);
console.table(usuarios); // imprime em forma de tabela
console.table(curso);