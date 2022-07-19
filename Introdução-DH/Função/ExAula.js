//const prompt = require("prompt-sync")()

let numero1 = 5//prompt("Digite o primeiro número: ")
let numero2 = 9//prompt("Digite o segundo número: ")

function menorNumero(numero1, numero2){

    if(numero1>numero2){
        return numero2
    }else{
        return numero1
    }
}



console.log("O menor número é:  " + menorNumero(numero1, numero2))