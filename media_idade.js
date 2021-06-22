function escreva(texto){
    document.write(texto)
}

var QuantidadeFamiliar = parseInt(prompt("Quantas Pessoas tem em sua familia ?") );

var a=0;

var TotalIdade=0;

while(a < QuantidadeFamiliar){
    
 var idade = parseInt(prompt("Informe idade do Familiar"));

 TotalIdade = TotalIdade+idade;
 
 a++
}

escreva("A media das idade de seus parentes é : " + TotalIdade/QuantidadeFamiliar);