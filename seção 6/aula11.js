// Aprendendo Função Fábrica(function factory) - fábrica de objetos

function fabricarCurso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarCurso('Programação em JavaScript', 27.99));
console.log(fabricarCurso('Criação de APIs com Django Rest Framework', 35.99));

let cursos = []

for(let i =0; i<5; i++){
    cursos.push(fabricarCurso(`Curso ${i + 1}`,`${19.99 + i*3}`));
}

console.log(cursos);