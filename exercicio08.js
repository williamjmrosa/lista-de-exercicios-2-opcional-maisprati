// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
const prompt = require('prompt-sync')()

class vidaSaudavel{
    constructor(horasAtividaMes){
        this.horasAtividaMes = horasAtividaMes
        this.pontosAte10h = 2
        this.pontosDe10hAte20h = 5
        this.pontosMais20h = 10
        this.dinheiroPorPonto = 0.05
        this.totalPontos = this.calcularPontos()
        this.totalGanho = this.calcularDinheiroGanho()
    }

    calcularPontos() {
        let pontos = 0

        if(this.horasAtividaMes > 20){
            pontos = this.horasAtividaMes * this.pontosMais20h
        }else if(this.horasAtividaMes > 10 && this.horasAtividaMes <= 20){
            pontos = this.horasAtividaMes * this.pontosDe10hAte20h
        }else{
            pontos = this.horasAtividaMes * this.pontosAte10h
        }

        return pontos
    }

    calcularDinheiroGanho(){
        let dinheiroGanho = this.totalPontos * this.dinheiroPorPonto
        

        return dinheiroGanho
    }
}

let novamente = false

do{

    let entradaHoras = false
    let horasAtividaMes

    while(!entradaHoras){
        horasAtividaMes = Number(prompt("Quantas horas de atividade fiz no mês? "))

        if(isNaN(horasAtividaMes) || horasAtividaMes < 0){
            console.log("Entrada Inválida")
        }else{
            entradaHoras = true
        }
    }

    let vs = new vidaSaudavel(horasAtividaMes)

    console.log("Pontos ganhos: ", vs.totalPontos)
    console.log("Dinheiro ganho: R$ ", vs.totalGanho.toFixed(2))

    let denovo = prompt("Deseja calcular novamente (s/n)? ").toLowerCase()

    novamente = denovo == "s" || denovo == "sim" ? true : false


}while(novamente)