let idade = 18;

if(idade < 18){
    console.log("menor de idade");
}
    else{
        console.log("maior de idade");
    }

// verifica a idade com condições

if(idade <= 14){
    console.log("Criança");
}
    else if(idade > 14 && idade < 18){
        console.log("Adolescente");
    }
        else{
            console.log("Adulto");
        }

// dica Geek (verifica valor)

if(1 == "1"){
    console.log("Sim, 1 == 1");
}else{
    console.log("Não");
}

// dica Geek (verifica valor e tipo de dado)

let valor = 30;
if(valor === "30"){
    console.log("Sim, valor === 30");
}else{
    console.log("Não");
}

// estruta de dados switch

let sexo = 'f';

switch(sexo){
    case 'm':
        console.log("Masculiuno");
        break;
    case 'f':
        console.log("Feminino");
        break;
    default:
        console.log("Desconhecido");
        break;
}


// 