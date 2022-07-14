var agora = new Date ()
var dia = agora.getDay()


console.log(dia);

switch (dia) {
    case 0:
        console.log(`Hoje é ${dia}.`);
        break;

    case 1:
        console.log(`Hoje é Segunda - Feira.`);
        break;

    case 2:
        console.log(`Hoje é Terça - Feira.`);
        break;
    
    case 3:
        console.log(`Hoje é Quarta - Feira.`);
         break;
                    
    case 4:
        console.log(`Hoje é dia do rodízio!`);
         break;

    default: 
        console.log(`Não sei que dia é hoje!`);

        break;
}

