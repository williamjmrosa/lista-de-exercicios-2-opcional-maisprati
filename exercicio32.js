// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const LINHA = 12
const COLUNA = 13

const MIN = -20
const MAX = 20

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

let matriz = []
let maiorElemento = []

for(let i = 0; i < LINHA; i++){
    matriz[i] = []
    maiorElemento[i] = 0
    for(let j = 0; j < COLUNA; j++){
        matriz[i][j] = sortear()
        if(Math.abs(matriz[i][j]) > maiorElemento[i]){
            maiorElemento[i] =Math.abs(matriz[i][j])
        }
        
    }
}

console.log("Matriz Original: ")
for(let i = 0; i < LINHA; i++){
    console.log(matriz[i].join("\t"))
}

for(let i = 0; i < LINHA; i++){
    for(let j = 0; j < COLUNA; j++){
        if(maiorElemento[i] != 0) matriz[i][j] /= maiorElemento[i]
    }
}

console.log("Matriz Modificada: ")
for(let i = 0; i < LINHA; i++){
    console.log(matriz[i].map(x => x.toFixed(4)).join("\t"))
}