function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora >= 0 && hora <=12){
        msg.innerHTML+= (` <p>Bom dia!`)
        img.src = 'nascerdosol.jpg'
        document.body.style.background = '#ffa500'
        
    } else if(hora>=13 && hora <18) {
        msg.innerHTML+= (` <p>Bom tarde!`)
        img.src = 'meiodia.jpg'
        document.body.style.background = '#1e90ff'

    } else {
        msg.innerHTML+= (`<p> Boa Noite!`)
        img.src = 'anoitecer.jpg'
        document.body.style.background = '#2f4f4f'


    }
}