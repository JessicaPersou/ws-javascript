let cidades = new Array(
    "São Paulo",
    "Salvador",
    "Curitiba",
    "Parati",
    "São Domingos"
)


const idade = 18;
let passagem = true;
let escolha = "São Paulo";

let podeViajar = passagem == true && idade >= 18;
 
let lista = 0
let destinoExiste = false;
while (lista<5){

    if (cidades[lista] == escolha){
    console.log("Autorizado");
    destinoExiste = true;
    break;
    } else{
        console.log("Tivemos um erro, favor verificar destino!")
    
    }
    lista +=1;
}
console.log("Destino Verificado; ", destinoExiste);