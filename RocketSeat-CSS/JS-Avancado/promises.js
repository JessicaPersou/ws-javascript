//Sincrono é quando a execução de algo não depende de outra coisa terminar.
//Assincrono é quando a execução depende de que algo termine para continuar, sendo feito em etapas, algo terminar, outro começa...
//Uma Promessa é algo que não importa o que aconteça no caminho, recebe um retorno não importa o status do que houve no caminho.

// let aceitar = true;

// console.log("Pedi o Uber: ");

// const promessa = new Promise((resolve, reject) => {
//   if (aceitar) {
//     return resolve("Pedido Aceito!"); // quando deu certo, sucesso
//   } else {
//     return reject("Pedido Negado!"); // casos de rejeição, não deu certo
//   }
// });

// console.log("Estou aguardando!");

// promessa
//   .then((resposta) => console.log(resposta))
//   .catch((erro) => console.log(erro))
//   .finally(() => console.log("Finalizada a Promessa!"));

//FETCH estrutura de promessa que está pendente

fetch(
  "https://www.sp-api.koin.com/access/06497EEC06624XXXXX1CA995A58D11C36,cEKjWCGZnu3BqWIzjh86kDqkUK5Kn1Tqk1Um0CRvb/zypnnzxJ+Ck51g7OgzSt+cnrPYBqWDHZa+0lQHpsDbGA==,1655995847441/resource"
).then((result) => console.log(result));
