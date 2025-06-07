// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.
const prompt = require('prompt-sync')()

function adivinhar() {
    let repetir = false
    do {
        let numeroSorteado = Math.floor(Math.random() * 5) + 1

        let entrada

        do {
            entrada = Number(prompt('Escolha um numero entre 1 e 5: '))

            if (isNaN(entrada)) {
                console.log("Entrada Invalida")
            } else if (numeroSorteado == entrada) {
                console.log("Acertou")
            } else {
                console.log("Errou")
            }
        } while (numeroSorteado != entrada)

        entrada = prompt("Tentar Novamente (s/n): ").toLowerCase()

        repetir = entrada == "s" || entrada == "sim" ? true : false
        
    } while (repetir)
}

adivinhar()
