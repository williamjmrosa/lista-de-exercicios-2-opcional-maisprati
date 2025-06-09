// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

class ProgressaoAritimetica{
    constructor(razao,termoInicial){
        this.razao = razao
        this.termoInicial = termoInicial
        this.quantidadeTermos = 10
        this.sequenciaCompleta = this.calcularSequenciaCompleta()
        this.somaSequencia = this.calcularSoma()
    }

    calcularProgressao(posicaoTermo){
        return this.termoInicial + (posicaoTermo - 1) * this.razao
    }

    calcularSequenciaCompleta(){
        let sequencia = []
        for(let i = 0; i < this.quantidadeTermos; i++){
            sequencia.push(this.calcularProgressao(i+1))
        }

        return sequencia
    }

    calcularSoma(){
        let soma = ((this.termoInicial + this.calcularProgressao(this.quantidadeTermos))* this.quantidadeTermos)/2

        return soma
    }

    mostrarSequencia(){
        let string = this.sequenciaCompleta.join(" -> ")

        return string
    }
}

const prompt = require("prompt-sync")()

let termo

let razao

for(let i = 0; i < 2; i++){

    if(i == 0) termo = Number(prompt("Entre com o primeiro termo da PA: "))

    if(i == 1) razao = Number(prompt("Entre com a razão da PA: "))

    if(isNaN(termo) && i == 0) {
        console.log("Termo Inválido")
        i--
    }else if(isNaN(razao) && i == 1){
        console.log("Razão Inválida")
        i--
    }


}

let pa = new ProgressaoAritimetica(razao,termo)

console.log("Mostrando a sequencia da PA: ",pa.mostrarSequencia())

console.log("Mostrando a soma dos termos da sequencia: ", pa.somaSequencia)