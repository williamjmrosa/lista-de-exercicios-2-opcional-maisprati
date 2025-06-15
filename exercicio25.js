// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

const LINHA = 15
const COLUNA = 20

let matriz = []

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

for (let i = 0; i < LINHA; i++) {
    console.log(matriz[i].join(" "))
}

for (let i = 0; i < COLUNA; i++) {
    somaColuna[i] = 0
    for (let j = 0; j < LINHA; j++) {
        somaColuna[i] += matriz[j][i]
    }
    console.log(`A soma da coluna ${i + 1} é: ${somaColuna[i]}`)
}