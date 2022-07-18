/*somando os valores do array, se forem pares e exibindo o resultado se o valor for maior que 25*/

let valores = [1,2,3,4,5,6,7,8,9]

let soma = 0


//impares
for(let i = 0; i < valores.length; i++){
    soma += valores[i]  
}



if( soma % 2 == 0){
    console.log("O número somado é par!" + soma)
}else{
console.log('os valor total é: ' + soma + ' e é ímpar!')
} 


//pares
let valoresPares = [2,4,6,8,10]
let par = 0
for(let i = 0; i < valoresPares.length; i++){
    par += valoresPares[i]  
}

if( par % 2 == 0){
    console.log("O número somado é par!" + par)
}else{
console.log('os valor total é: ' + par + ' e é ímpar!')
} 
