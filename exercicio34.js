// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

const LINHA = 50
const COLUNA = 50

const MIN = -10
const MAX = 10

let matriz = []

function sortear(){
    return Math.floor(Math.random() * (MAX -  MIN + 1) + MIN)
}

let diagonalPrincipalLinha = []

for(let i = 0; i < LINHA; i++){
    matriz[i] = []
    for(let j = 0; j < COLUNA; j++){
        matriz[i][j] = sortear()
        if(i == j){
            diagonalPrincipalLinha[i] = matriz[i][j]
        }
    }
}

console.log("Matriz Original: ")
for(let i = 0; i < LINHA; i++){
    console.log(matriz[i].join("\t"))
}

for(let i = 0; i < LINHA; i++){
    for(let j = 0; j < COLUNA; j++){
        matriz[i][j] *= diagonalPrincipalLinha[i]
    }
}

console.log("Matriz Modificada: ")
for(let i = 0; i < LINHA; i++){
    console.log(matriz[i].join("\t"))
}