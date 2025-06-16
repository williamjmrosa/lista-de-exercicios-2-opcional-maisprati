// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const TAMANHO_VETOR = 100

const MAX = 100
const MIN = -100

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

let vetorA = []
let vetorB = []

for(let i = 0; i < TAMANHO_VETOR; i++){
    vetorA.push(sortear())
}

vetorB = vetorA.filter(numero => numero > 0)

console.log("Vetor A: \n", vetorA.join(" | "))
console.log("Vetor B: \n", vetorB.join(" | "))