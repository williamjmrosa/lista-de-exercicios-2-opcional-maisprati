// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const TAMANHO = 13
const QTD_APOSTADORES = 100
const NUMERO_MINIMO = 0
const NUMERO_MAXIMO = 1

let gabarito = []
let apostadores = []

function sortear() {
    return Math.floor(Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1) + 1)
}

function gerarVetorAposta(){
    let vetor = []
    for(let i = 0; i < TAMANHO; i++){
        
        vetor.push(sortear())
    }
    return vetor.sort((a,b) => a - b)
}


class Apostador {
    constructor(numeroCartao){
        this.cartao = gerarVetorAposta()
        this.numeroCartao = numeroCartao
    }

    verificarAcertos(gab){
        let contagemAcertos = 0
        for(let i = 0; i < TAMANHO; i++){
            if(this.cartao[i] == gab[i]){
                contagemAcertos++
            }
        }
        this.acertos = contagemAcertos
    }

    ganhou(){
        if(this.acertos == TAMANHO){
            console.log(`Parabéns, Apostador do cartão N° ${this.numeroCartao}, tu foi o GANHADOR`)
        }else{
            console.log(`O Apostador do cartão N° ${this.numeroCartao} acertou ${this.acertos} acertos`)
        }
    }


}

gabarito = gerarVetorAposta()
console.log("Gabarito: ",gabarito.join(", "))

for(let i = 1; i <= QTD_APOSTADORES; i++){

    let apostador = new Apostador(i)

    apostador.verificarAcertos(gabarito)

    apostadores.push(apostador)

}

for(let i = 0; i < apostadores.length; i++){
    apostadores[i].ganhou()
}