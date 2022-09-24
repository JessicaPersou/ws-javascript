function verificar(){
    let ini = document.getElementById("ini"); // numero de inicio
    let fim =  document.getElementById("fim"); // numero do fim
    let passo = document.getElementById('passos'); // quantidade de passos
    let res = document.querySelector('#res'); // resultado

    if (Number(passo.value.length) == 0 || Number(ini.value.lenght) == 0 || Number(fim.value.lenght)==0){    
        window.alert("ERRO. Verifique os dados e tente novamente!")
    } else {
        res.innerHTML=("Contando: ");
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p<=0){
            alert(`Passo inválido!`);
            p =1
        }
        
        if (i<f){
            //Contagem Crescente
        for(let c = i; c <= f ; c += p){
            res.innerHTML+= `${c} \u{1f3cb}`;
        }
     } else {
            //Contagem Descrescente
            for (let c = i; c >= f ; c-= p){
            res.innerHTML += `${c} \u{1f3cb}`;
            }
        }
            res.innerHTML += `${c} \u{1f60e}`;
    }
    
    
}
