// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

const LINHA = 10
const COLUNA = 10

let matriz = []

let somaAcima = 0
let somaAbaixo = 0

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < LINHA; i++) {
    matriz[i] = []
    for (let j = 0; j < COLUNA; j++) {
        matriz[i][j] = sortear(-10, 10)
        if(j > i){
            somaAcima += matriz[i][j]
        }else if(j < i){
            somaAbaixo += matriz[i][j]
        }
    }
}

console.log("Matriz: ")
for (let i = 0; i < LINHA; i++) {
    console.log(matriz[i].join(" "))
}

console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`)
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`)