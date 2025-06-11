// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()

const numeros = []

for(let i = 0; i < 10; i++){
    let numero = prompt(`Digite o ${i+1}º numero : `)

    if(isNaN(parseInt(numero)) || Number.isInteger(Number(numero)) == false){
        console.log('Entrada de numero inválida deve ser um numero inteiro')
        i--
        
    }else{
        numeros.push(Number(numero))
    }
}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log(`O numero ${numeros[i]} foi digitado na ${i+1}º posição`)
    }
}