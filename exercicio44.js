// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

let dados = {
    numero: 1,
    string: "texto",
    texto: "texto",
    strings: ["abc", "def", "ghi"],
    array: [1,2,3]
}

function contarStrings(objetos){

    console.log(Object.values(objetos))

    let contador = Object.values(objetos).filter(valor => typeof valor == "string").length
    
    return contador

}

console.log("Quantidade de Strings: ", contarStrings(dados))