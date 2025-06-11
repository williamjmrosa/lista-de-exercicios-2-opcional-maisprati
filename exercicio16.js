// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const prompt = require('prompt-sync')()

const numeros = []

for(let i = 0; i < 20; i++){
    let numero = Math.floor(Math.random() * 100)
    numeros.push(numero)
}

console.log("Os numeros gerados: ",numeros.sort((a,b) => a - b).join(", "))