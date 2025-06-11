// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci(elemento) {

    if(elemento == 1 || elemento == 2) {
        return 1
    }else {
        return fibonacci(elemento - 1) + fibonacci(elemento - 2)
    }
}

let sequencia = []

for(let i = 1; i <= 10; i++) {
    sequencia.push(fibonacci(i))
}

console.log("A sequência de Fibonacci: ", sequencia.join(", "))