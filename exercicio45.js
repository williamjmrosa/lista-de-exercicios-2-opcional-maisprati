// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

let strings = ['William','José','William','Pedro','William','José']

function criarObjeto(strings){
    
    return strings.reduce((acumulador, valor) =>{
        acumulador[valor] = (acumulador[valor] || 0) + 1
        
        return acumulador
    }, {}) 

}

console.log(criarObjeto(strings))