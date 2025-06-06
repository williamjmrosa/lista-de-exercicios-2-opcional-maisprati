// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const prompt = require('prompt-sync')()

function jokenPo(){
    let jogador1

    const opcoes = ["Pedra", "Papel", "Tesoura"]

    do{
        console.log("  ______________\n",
                    "|   JO KEN PO  |\n",
                    "| 1 - Pedra    |\n",
                    "| 2 - Papel    |\n",
                    "| 3 - Tesoura  |\n",
                    "|______________|\n")

        jogador1 = Number(prompt("Escolha uma opção: "))

        if(isNaN(jogador1) || jogador1 < 1 || jogador1 > 3){
            console.log("Opção inválida")
        }

    }while(isNaN(jogador1) || jogador1 < 1 || jogador1 > 3)


    let jogador2 = Math.floor(Math.random() * 3) + 1

    console.log(`\nVocê escolheu: ${opcoes[jogador1 - 1]}`);
    console.log(`A máquina escolheu: ${opcoes[jogador2 - 1]}`);

    if(jogador1 == 1 && jogador2 == 3 || jogador1 == 2 && jogador2 == 1 || jogador1 == 3 && jogador2 == 2){
        console.log("Você ganhou")
    }else if(jogador1 == jogador2){
        console.log("Empate")
    }else{
        console.log("Maquina ganhou")
    }

    jogarNovamente =prompt("Jogar novamente? (S/N): ").toLowerCase()

    if(jogarNovamente == "s" || jogarNovamente == "sim" || jogarNovamente == "y" || jogarNovamente == "yes"){
        jokenPo()
    }
}

jokenPo()