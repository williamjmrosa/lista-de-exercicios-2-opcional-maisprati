// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

const LINHA = 5
const COLUNA = 5

let matriz = []

let somaLinha = []
let somaColuna = []

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < LINHA; i++) {
    matriz[i] = []
    for (let j = 0; j < COLUNA; j++) {
        matriz[i][j] = sortear(-10, 10)
    }
}

console.log("Matriz Gerada: ")
for (let i = 0; i < LINHA; i++) {
    console.log(matriz[i].join(" "))
}

for (let i = 0; i < LINHA; i++){
    somaLinha[i] = matriz[i].reduce((soma, valor) => soma + valor, 0)
    somaColuna[i] = matriz.reduce((soma, linha) => soma + linha[i], 0)
}

console.log("Soma das Linhas: ", somaLinha.join(", "))
console.log("Soma das Colunas: ", somaColuna.join(", "))
