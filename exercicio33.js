// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const LINHA = 3
const COLUNA = 3

const MIN = -10
const MAX = 10

let matriz = []

let mediaDiagonalSecundaria = 0

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

for(let i = 0; i < LINHA; i++){
    matriz[i] = []
    for(let j = 0; j < COLUNA; j++){
        matriz[i][j] = sortear()
        if(i + j == LINHA - 1){
            mediaDiagonalSecundaria += matriz[i][j]
        }
    }
}

mediaDiagonalSecundaria /= LINHA

for(let i = 0; i < LINHA; i++){
    for(let j = 0; j < COLUNA; j++){
        if(i == j){
            matriz[i][j] *= mediaDiagonalSecundaria
        }
    }
}

console.log("Matriz Modificada: ")
for(let i = 0; i < LINHA; i++){
    console.log(matriz[i].join("\t"))
}