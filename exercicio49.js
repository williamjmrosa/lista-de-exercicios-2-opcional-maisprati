// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let transacoes = [
    {id: 1, valor: 1000, data: "2022-01-01", categoria: "compras"},
    {id: 2, valor: 500, data: "2022-02-01", categoria: "compras"},
    {id: 3, valor: 2000, data: "2022-03-01", categoria: "vendas"},
    {id: 4, valor: 1000, data: "2022-04-01", categoria: "vendas"},
    {id: 5, valor: 500, data: "2022-05-01", categoria: "compras"},
    {id: 6, valor: 2000, data: "2022-06-01", categoria: "compras"},
    {id: 7, valor: 1000, data: "2022-07-01", categoria: "compras"},
    {id: 8, valor: 500, data: "2022-08-01", categoria: "empréstimos"},
    {id: 9, valor: 2000, data: "2022-09-01", categoria: "compras"},
    {id: 10, valor: 1000, data: "2022-10-01", categoria: "empréstimos"},
    {id: 11, valor: 500, data: "2022-11-01", categoria: "compras"},
    {id: 12, valor: 2000, data: "2022-12-01", categoria: "vendas"},
    {id: 13, valor: 1000, data: "2023-01-01", categoria: "vendas"},
    {id: 14, valor: 500, data: "2023-02-01", categoria: "empréstimos"},
    {id: 15, valor: 2000, data: "2023-03-01", categoria: "empréstimos"},
    {id: 16, valor: 1000, data: "2023-04-01", categoria: "empréstimos"},
    {id: 17, valor: 500, data: "2023-05-01", categoria: "compras"},
    {id: 18, valor: 2000, data: "2023-06-01", categoria: "vendas"},
    {id: 19, valor: 1000, data: "2023-07-01", categoria: "compras"},
    {id: 20, valor: 500, data: "2023-08-01", categoria: "compras"}
]

let transacoesPorCategoria = transacoes.reduce((acumulador, transacao) => {
    
    if(!acumulador[transacao.categoria]){
        acumulador[transacao.categoria] = {
            'transacoes': [],
            'subtotal': 0
        }
    }

    acumulador[transacao.categoria].transacoes.push(transacao)
    acumulador[transacao.categoria].subtotal += transacao.valor
    return acumulador

}, {})

for(let categoria in transacoesPorCategoria){
    console.log(categoria, transacoesPorCategoria[categoria])
}