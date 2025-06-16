// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const LINHA = 5
const COLUNA = 5

let matriz = []

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let i = 0; i < LINHA; i++) {
    matriz[i] = []
    for (let j = 0; j < COLUNA; j++) {
        matriz[i][j] = sortear(-10, 10)
    }
}

let somaLinha4 = matriz[3].reduce((soma, valor) => soma + valor, 0)

let somaColuna2 = 0

for (let i = 0; i < LINHA; i++){
    somaColuna2 += matriz[i][1]
}

let somaDiagonalPrincipal = 0

for (let i = 0; i < LINHA; i++){
    somaDiagonalPrincipal += matriz[i][i]
}

let somaTodosElementos = matriz.reduce((somaTotal, linha) => {
    return somaTotal + linha.reduce((soma, valor) => soma + valor, 0)
    
}, 0)



for (let i = 0; i < LINHA; i++){
    console.log(matriz[i].join(" "))
}

console.log(`Soma da linha 4: ${somaLinha4}`)
console.log(`Soma da coluna 2: ${somaColuna2}`)
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`)
console.log(`Soma de todos os elementos: ${somaTodosElementos}`)