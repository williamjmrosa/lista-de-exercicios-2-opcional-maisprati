// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const LINHA = 30
const COLUNA = 30
const MIN = -20
const MAX = 20

function sortear() {
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

let matrizV = []

let matrizX = []

let A = sortear()

let qtdA = 0

for (let i = 0; i < LINHA; i++) {
    matrizV[i] = []
    for (let j = 0; j < COLUNA; j++) {
        matrizV[i][j] = sortear()
        if(matrizV[i][j] == A){
            qtdA++
        }else{
            matrizX.push(matrizV[i][j])
        }
    }
}

console.log("Matriz V: ")
for (let i = 0; i < LINHA; i++) {
    console.log(matrizV[i].join("\t"))
}

console.log(`Quantidade de elementos iguais a ${A}: ${qtdA}`)

console.log("Matriz X: ")
console.log(matrizX.join(", "))
