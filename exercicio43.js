// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

let obj1 = {nome: "William José", idade: 26}
let obj2 = {idade: 27, aprovado: false}

function combinaObjetos(obj1, obj2) {
    let obj3 = {...obj1, ...obj2}
    return obj3
}
console.log(combinaObjetos(obj1, obj2))
