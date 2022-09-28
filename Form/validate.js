// function validar() {
//   let nome = document.getElementById("nomeCompleto");
//   let email = document.getElementById("email");

//   if (!nome.value || nome.value.length < 3 || nome.value.length > 30) {
//     nome.focus();
//     alert("Campo nome inválido!");
//     return false;
//   }
//   if (!email.value || !validarEmail(email.value)) {
//     email.focus();
//     alert("Campo e-mail inválido!");
//     return false;
//   }
//   return true;
// }

// function validarEmail(email) {
//   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// }

function enviar(e) {
  e.preventDefault();
  if (!validar()) {
    return;
  }
  alert("Formulário enviado com Sucesso!");
}

const camposObrigatorios = documento.getElementByClass(".required");

function enviar() {
  console.log(camposObrigatorios);
}
