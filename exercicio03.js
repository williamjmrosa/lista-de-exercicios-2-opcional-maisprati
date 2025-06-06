// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')()

function precoPassagem(){
    let distancia

    do{
        distancia = Number(prompt("Distancia da Viagem em KM: "))

        if(distancia <= 0 || isNaN(distancia)){
            console.log("Distancia Invalida, Digite um numero Positivo")
        }

    }while(distancia <= 0 || isNaN(distancia))

    let tarifa = distancia > 200 ? 0.45 : 0.50

    let precoTotal = distancia * tarifa

    console.log("Preço da Passagem é R$ ", precoTotal.toFixed(2))
}

precoPassagem()