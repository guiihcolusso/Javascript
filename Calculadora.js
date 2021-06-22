var status = prompt("Deseja Continuar ?")

while(status == "entrar"){

var valor12 = prompt("Digite o primeiro valor : ");
var valor22 = prompt("Digite o segundo valor : ");

let valor1 = parseFloat(valor12)
let valor2 = parseFloat(valor22)

var tipoconta = prompt("Digite o tipo da conta");

if(tipoconta == "mais"){
    var total = valor1+valor2;
    alert(total)
}

else if (tipoconta == "menos"){
    var total = valor1-valor2;
    alert(total)
}

else if (tipoconta == "vezes"){
    var total = valor1*valor2;
    alert(total)
}
}