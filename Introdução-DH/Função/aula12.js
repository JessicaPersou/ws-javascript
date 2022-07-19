let camisasDisponiveis = "1"
console.log("*************Bem vindo ao Emporio DH*************\n")
console.log("1 - Manga Longa\n");
console.log("2 - Gola-V\n");
console.log("3 - Camiseta Regata\n");
console.log("4 - Camisa Verão\n");
console.log("5 - Camisa Social\n");
camisasDisponiveis = console.log("Informe o número do modelo e veja quais cores estão disponíveis!\n");


switch (camisasDisponiveis) {
    case "1":
        console.log("Verde, Azul, Branco");
        break;
    case "2":
        console.log("Branco, Roxo, Laranja");
        break;
    case "3":
        console.log("Amarelo, Verde-Limão, Rosa");
        break;
    case "4":
        console.log("Coral, Vermelho, Azul-Turquesa");
        break;
    case "5":
        console.log("Azul-Marinho, Preto, Nude");
        break;
    default:
        console.log("Você digitou errado, os números estão entre 1 e 5, por favor informe corretamente!");
        break;
}