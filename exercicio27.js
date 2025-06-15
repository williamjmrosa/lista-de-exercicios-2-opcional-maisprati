// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const LINHA = 6
const COLUNA = 6

let M = []
let V = []

for(let i = 0; i < LINHA; i++){
    M[i] = []
    for(let j = 0; j < COLUNA; j++){
        M[i][j] = sortear(-10, 10)
    }
}
console.log("Matriz M: ")
for(let i = 0; i < LINHA; i++){
    console.log(M[i].join(" "))
}

let A = sortear(-10, 10)
console.log("Valor A: ", A)

for(let i = 0; i < LINHA; i++){
    for(let j = 0; j < COLUNA; j++){
        M[i][j] *= A
        V.push(M[i][j])
    }
}


console.log("Vetor V: ", V.join(", "))