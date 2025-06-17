// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

let dado = {
    aluno: "WILLIAM",
    nota1: 10,
    nota2: 9.5,
    nota3: 8.5,
}

function traformarStringMinuscula(string) {
    return string.toLowerCase()
}

function trasformaNotaEmMax100(nota) {
    return nota * 10
}

function transformarObjeto(objeto, funcao1, funcao2) {
    let novoObjeto = {}
    for (let propriedade in objeto) {
        novoObjeto[propriedade] = typeof objeto[propriedade] == "string" ? funcao1(objeto[propriedade]) : funcao2(objeto[propriedade])
    }
    return novoObjeto
}

let novoObjeto = transformarObjeto(dado, traformarStringMinuscula, trasformaNotaEmMax100)
console.log("Objeto Original: ", dado)

console.log("Novo Objeto: ", novoObjeto)