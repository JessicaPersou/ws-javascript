/*/* Faça um sistema que leia as 2 notas de um aluno e calcule a média final deste aluno. respectivamente. */

let nota1, nota2, mediaFinal, aprovado
		
nota1 = prompt("Escreva a Nota 1: ")
nota2 = prompt("Escreva a Nota 2: ")
	
mediaFinal = (parseInt(nota1) + parseInt(nota2)) / 2
    
// media final aprovado - 6 ou reprovado
console.log(mediaFinal)
aprovado = mediaFinal >= 6 

console.log("Aluno aprovado? " + aprovado)


//portugol

/*programa
{	//Faça um sistema que leia as 2 notas de um aluno e calcule a média final deste aluno. 

	
	funcao inicio()
	{	
		real nota1, nota2, mediaFinal
		logico aprovado 
		
		escreva("Escreva a Nota 1: ")
		leia(nota1)
		
		escreva("Escreva a Nota 2: ")
		leia(nota2)
	
		mediaFinal = (nota1+nota2)/2
    
    // media final aprovado - 6 ou reprovado
    
        aprovado = mediaFinal >= 6 

		escreva("Aluno aprovado? " + aprovado)
	}
}*/