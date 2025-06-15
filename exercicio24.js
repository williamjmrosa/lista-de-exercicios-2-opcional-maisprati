// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const LINHA = 6
const COLUNA = 8

let M = []
let C = []

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i < LINHA; i++){
    M[i] = []
    C[i] = 0
    for(let j = 0; j < COLUNA; j++){
        M[i][j] = sortear(-10, 10)
        if(M[i][j] < 0){
            C[i]++
        }
    }
}

console.log("Matriz M: ")

for(let i = 0; i < LINHA; i++){
    console.log(M[i].join(" "))
}

console.log("Vetor C: ", C.join(", "))

