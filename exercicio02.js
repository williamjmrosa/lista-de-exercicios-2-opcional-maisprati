// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

function multa(){
    let velocidade
    
    do{
        velocidade = Number(prompt("Entre com uma velocidade em KM/h: "))

        if(velocidade < 0 || isNaN(velocidade)){
            console.log("Velocida invalida")
        }

    }while(velocidade < 0 || isNaN(velocidade))
    
    if(velocidade > 80){
        let valorMulta = (velocidade - 80) * 5
        console.log("Você foi mutado em R$", valorMulta.toFixed(2))
    }
}

multa()