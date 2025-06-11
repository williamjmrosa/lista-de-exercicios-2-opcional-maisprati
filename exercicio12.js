// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci(elementos) {

    let sequencia = [1, 1]

    for (let i = 2; i < elementos; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2])
    }

    return sequencia

}

let sequencia = fibonacci(10)

console.log("A sequência de Fibonacci: ", sequencia.join(", "))