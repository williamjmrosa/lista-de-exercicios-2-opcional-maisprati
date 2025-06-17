// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = {
    caneta: 10,
    lapis: 3,
    borracha: 5,
    notebook: 2
}
let inventarioLojaB = {
    caneta: 5,
    lapis: 2,
    borracha: 2,
    caderno: 1
}

function combinarInventarios(invLojaA, invLojaB) {
    let novoInventario = { ...invLojaA}

    for (let item in invLojaB) {
        if (novoInventario[item]) {
            novoInventario[item] += invLojaB[item]
        } else {
            novoInventario[item] = invLojaB[item]
        }
    }
    return novoInventario

}

console.log("Inventario Loja A: ", inventarioLojaA)
console.log("Inventario Loja B: ", inventarioLojaB)

console.log("Novo Inventario combinado: ",combinarInventarios(inventarioLojaA, inventarioLojaB))