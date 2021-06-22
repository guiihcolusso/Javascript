function calculaImc(peso, altura) {

    var imc = peso / (altura * altura);
    document.write("IMC : " + imc);
}

calculaImc(90, 1.75);