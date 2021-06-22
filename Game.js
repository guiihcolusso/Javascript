function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    var numeroPensado = Math.round(Math.random() * 10);

    console.log(numeroPensado);

    var contador = 0;

    while (contador <= 2) {

        var chute = parseInt(prompt("Digite seu chute!" + " Tentativas " + contador + "/3"));

        if (chute == numeroPensado) {

            mostra("Você acertou, o número sorteado foi " + numeroPensado);
            break;
        } else {

            mostra("Você ERROU");
        }

        contador++;

    }

    mostra("Bom Jogo :)")
