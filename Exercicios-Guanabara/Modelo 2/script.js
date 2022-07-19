function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('ano') // elemento caixa de texto ano
    var res = document.querySelector('div#res') // resultado

    if (fano.value.length == 0 || Number(fano.value) > ano){
        
        window.alert("erro")
    } else{
        var sex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'
            document.body.style.background = '#00CED1'
            if(idade>0 && idade <10){
                //criança
                img.setAttribute('src', 'bebe.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', '30anosboy.png')

            }else if(idade<=50){
                //adulto
                img.setAttribute('src', 'negro.jpg')

            }else if(idade>=51){
                //idoso
                img.setAttribute('src', '60anosman.jpg')

            }
        } else {
            genero = 'Mulher'
            document.body.style.background = "#B22222"

            if(idade>0 && idade <10){
                //criança
                img.setAttribute('src', 'bebegirl.jpg')

            }else if(idade < 21){
                //jovem
                img.setAttribute('src', '30anos.jpg')

            }else if(idade<=50){
                //adulto
                img.setAttribute('src', 'maravilha.jpg')

            }else if(idade>=51){
                //idoso
                img.setAttribute('src', '60anoswoman.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}