let frutas = new Array("Maracujá","Banana","Maça","Morango")
console.log(frutas[0]) // pegar por posição
console.log("Mostrando length" + frutas.length) //quantidade total de arrays dentro da variavel frutas
let ultimo = frutas[frutas.length - 2];
console.log(ultimo)
let add = frutas.push("Manga") //
console.log(frutas)
let addInicio = frutas.unshift("Kiwi")
console.log(frutas) 
let posicao = frutas.indexOf("Banana")
console.log(posicao)

console.log(Array.isArray(frutas)) // para saber se é array

let nomes = "Jessica é personal e programadora"
let strNomes = nomes.split("e") // cria um array com a frase acima a partir do caracter que eu determinar
console.log(strNomes)
console.log(Array.isArray(nomes))
console.log(Array.isArray(strNomes))

/*for(let i = 0; i < strNomes.length; i++ ){
    console.log(strNomes);
}*/
let troca = strNomes.join([separador = "-"])
console.log(troca)