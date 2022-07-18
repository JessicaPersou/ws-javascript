/*escreva uma frase no com for usando o metodo array e depois mudar o metodo separador */



let paises = ["Brasil", "México", "Uruguai", "Chile"]

for( i = 0 ; i <1; i++){
paises.forEach(function (i, p, array){
    console.log(i,p)
})
} // formas de ler array

for( let value of paises){
    console.log(value)
} //segunda forma de ler array

//somando elementos de um array
let numero = [0,1,2,3,4,5,6,7,8,9]
let soma = 0
for(let i = 0; i < numero.length; i++){
     soma += numero[i];
}

console.log(soma)
