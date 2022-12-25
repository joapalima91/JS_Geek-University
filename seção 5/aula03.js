// Aprendendo forEach

var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]
/*
console.log(cursos)
console.log(`O total de cursos é: ${cursos.length}`)
console.log('--------------------------------------------------')
//definir uma função
function imprimir (curso, indice){
    console.log(`${indice} - ${curso}`)
}
// para cada elemento imprimir
cursos.forEach(imprimir)
*/

/*
// utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`)
})
*/
// fazendo com o "for" sairia dessa maneira
for(var i =0; i<cursos.length; i++){
    console.log(`${i} - ${cursos[i]}`)
}