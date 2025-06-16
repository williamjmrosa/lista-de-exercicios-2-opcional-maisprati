// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
    numero: 1,
    string: "texto",
    strings: ["abc", "def", "ghi"],
    array: [1,2,3]
}

function novoObjeto(dados){
    let novo = []
    for (let atributo in dados){
        if(Array.isArray(dados[atributo]) == true){
            novo.push([atributo, dados[atributo]])
        }
    }

    return Object.fromEntries(novo)
}

console.log("Objeto Original: \n",dados)

console.log("Novo Objeto: \n",novoObjeto(dados))

