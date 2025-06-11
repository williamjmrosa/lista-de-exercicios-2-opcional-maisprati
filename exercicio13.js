// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

function fibonacci(elemento) {

    if(elemento == 1 || elemento == 2) {
        return 1
    }else {
        return fibonacci(elemento - 1) + fibonacci(elemento - 2)
    }
}

let sequencia = []

for(let i = 1; i <= 15; i++) {
    sequencia.push(fibonacci(i))
}

console.log("A sequência de Fibonacci: ", sequencia.join(", "))