// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

const TAMANHO_VETOR = 5
const TAMANHO_VETOR_APOSTADOR = 50

const MAX = 10
const MIN = 1

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

function apostar(){
    let aposta = []
    for(let i = 0; i < TAMANHO_VETOR; i++){
        let numero = sortear()
        if(aposta.indexOf(numero) != -1){
            i--
        }else{
            aposta.push(numero)
        }
    }
    return aposta.sort((a,b) => a - b)
}

let loto = apostar()

let apostas = []
for(let i = 0; i < TAMANHO_VETOR_APOSTADOR; i++){
    let aposta = apostar()
    apostas.push(aposta)
}

for(let i = 0; i < apostas.length; i++){
    
    let ganhador = apostas[i].every((numero, index) => loto[index] == numero)
    if(ganhador){
        console.log("Aposta", i + 1, "Ganhador")
    }
}

console.log("Números da Loto: ",loto.join(", "))
