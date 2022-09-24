let cidades = new Array(
`Roma`,
`Londres`,
`Viena`,
`Paris`
)
let compradorIdade = 18;
const acompanhado = true;
const comprouPassagem = true;


if(compradorIdade >=18 || acompanhado){
    console.log("Autorizada a venda de passagens");
    console.log(cidades);
}else{
 console.log(`Menor de idade, e não está acompanhado`);
 cidades.splice(1,1);
 console.log(cidades);
}

if(compradorIdade >=18 && comprouPassagem ){
    console.log(`Autorizado embarque`);
} else{
    console.log(`Você precisa comprar a passagem do seu destino`)
}
