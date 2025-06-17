// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

let vendas = [
    {vendedor: "William", valor: 1000},
    {vendedor: "José", valor: 500},
    {vendedor: "William", valor: 1000},
    {vendedor: "Pedro", valor: 500},
    {vendedor: "William", valor: 1000},
    {vendedor: "José", valor: 500},
]

function criarObjeto(vendas){

    return vendas.reduce((acumulador, venda) => {
        acumulador[venda.vendedor] = (acumulador[venda.vendedor] || 0) + venda.valor
        return acumulador
    }, {})
}

console.log(criarObjeto(vendas))