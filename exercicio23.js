// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

const prompt = require('prompt-sync')()
const matrizQuadrada = 7

matriz = []

for(let i = 0; i < matrizQuadrada; i++){
    matriz[i] = []
    for(let j = 0; j < matrizQuadrada; j++){
        if(i == j){
            matriz[i][j] = 1
        }else{
            matriz[i][j] = 0
        }
    }
}

for(let i = 0; i < matrizQuadrada; i++){
    console.log(matriz[i].join(" "))
}