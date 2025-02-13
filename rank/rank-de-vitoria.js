let somaVitorias = calculoRanked()
let Elo = ""

//A função, serve para colocar uma estrutura de repetição onde escolho manualmente a quantidade de vitorias e derrotas que sera entregue no return, pos calculo de subtração
function calculoRanked(vitorias, derrotas){

    for(vitorias = 1; vitorias <= 50; vitorias++){

        console.log("Vitória!")
        console.log("Você venceu " + vitorias)
    }
        console.log("------------------------------")
    for(derrotas = 1; derrotas <= 1; derrotas++){

        console.log("Derrota!")
        console.log("Você perdeu " + derrotas)
    }

    return vitorias - derrotas
}
    //pós isso, entramos na estrutura de condição para verificarmos o produto da nossa subtração, e entregar o nivel ou (Elo) como decidi chamar.

    switch(true){

        case somaVitorias <= 10:
            Elo = "Ferro"
            break;
        case somaVitorias >= 11 && somaVitorias <= 20:
            Elo = "Bronze"
            break;
        case somaVitorias >= 21 && somaVitorias <= 50:
            Elo = "Prata"
            break;
        case somaVitorias >= 51 && somaVitorias <= 80:
            Elo = "Ouro"
            break;
        case somaVitorias >= 81 && somaVitorias <= 90:
            Elo = "Diamante"
            break;
        case somaVitorias >= 91 && somaVitorias <= 100:
            Elo = "Lendário"
            break;
        case somaVitorias >= 101:
            Elo = "Imortal"
            break;
    }

        //e aqui estamos, com a mensagem final.
        console.log("O Herói tem o saldo de vitórias " + somaVitorias + " e está no Elo " + Elo)