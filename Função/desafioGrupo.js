console.log("---------------Bem vindo ao Emporio DH---------------")

let camisasModelo = ["Camisas Manga Longa", "Casual", "Camisa Gola-V"]
let camisa1 = ["Camisa Manga Longa", "Preta", 89.90]
let camisa2 = ["Camisa Casual", "Vermelha", 89.90]
let camisa3 = ["Camisa Casual", "Azul", 59.90]
let camisa4 = ["Camiseta Gola-V", "Branca", 39.90]
let camisa5 = ["Camisa Manga Longa", "Preta", 99.90]
let camisa6 = ["Camisa Casual", "Verde", 69.90]
let camisa7 = ["Camisa Gola-V", "Amarela", 79.90]

console.log("Modelos de Camisas : " + (camisasModelo))
console.log("Camisas Manga Longa : " + (camisa1 + " ou " + camisa5))

/*for (var i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i)
}
Estrutura WHILE - Exercício 1
var i = 1
while (i <= 10) {
    console.log("7 x " + i + " = " + 7 * i)
    i++
}
Estrutura WHILE - Exercício 3
var i = 1
var somaPares = 0
var digitados = ""
var pares = ""
while (i <= 5) {
    var numero = parseInt(prompt("Insira o " + i + "o número:"))
    digitados = digitados + numero + ", "
    if (numero % 2 == 0) {
        somaPares = somaPares + numero
        pares = pares + numero + ", "
    }
    i++
}
console.log("Números digitados: " + digitados)
console.log("Números pares: " + pares)
console.log("Soma dos números pares: " + somaPares)
Desafio do notebook no JavaScript
let marca
let valor
let vouComprar
console.log("Você deseja comprar um notebook que seja diferente de Asus OU menos de 3000 reais!")
console.log(" ")
valor = prompt("Digite o valor do notebook: ")
marca = prompt("Digite a marca do notebook: ")
console.log(" ")
vouComprar = marca != "Asus" || valor < 3000
console.log("Irei comprar? Eis a minha resposta: " + vouComprar + "!")
// SWITCH CASE
var quantidadeCoxinhas = 0
var qualidadeCoxinha = "Ruim"
switch (qualidadeCoxinha) {
    case "Ruim":
    case "ruim":
        if (quantidadeCoxinhas > 0) {
            console.log("Coxinha estragada!")
        } else {
            console.log("Não tem coxinha!")
        }
        break
    case "Boa":
        console.log("Coxinha boa!")
        break
    default:
        console.log("Não tem coxinha.")
}
let continentePaises="1"
console.log("1 - América do Sul");
console.log("2 - África Central");
console.log("3 - Europa");""
console.log("4 - América do Norte");
console.log("5 - Oceania\n");
continentePaises=prompt("Digite o número do continente e veja quais países existem nele!\n");
switch (continentePaises) {
case "1":
console.log("Argentina, Bolívia, Brasil, Chile, Colômbia");
break;
case "2":
console.log("Angola, Camarões, Chade, Gabão, Guiné Equatorial");
break;
case "3":
console.log("Albânia, Alemanha, Berlim, Armênia, Áustria");
break;
case "4":
console.log("Canadá, Estados Unidos, Dinamarca (Groenlândia), México");
break;
case "5":
console.log("Austrália, Indonésia, Nauru, Nova Zelândia, Tonga");
break;
    default:
    console.log("Você digitou errado, os números estão entre 1 e 5, por favor digite corretamente.");
        break;
}
*/