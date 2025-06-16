// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const MAX = 30
const MIN = 0
const TAMANHO = 5

let pares = []
let impares = []

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

for(let i = 0; i < MAX; i++){
    let numero = sortear()
    if(numero % 2 == 0){
        pares.push(numero)
        if(pares.length == TAMANHO){
            console.log("Vetor de pares: ", pares.join(", "))
            pares = []
        }
    }else{
        impares.push(numero)
        if(impares.length == TAMANHO){
            console.log("Vetor de impares: ", impares.join(", "))
            impares = []
        }
    }
}

console.log("Vetor de pares: ", pares.join(", "))
console.log("Vetor de impares: ", impares.join(", "))