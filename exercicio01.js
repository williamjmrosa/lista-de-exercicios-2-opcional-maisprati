// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

let qtdCigarroDia
let anosFumando
const perdeVida = 10

qtdCigarroDia = Number(prompt('Quantos Cigarros fuma por dia? '))

anosFumando = Number(prompt('Quantos anos fumando? '))


let totalMinutos = perdeVida*((anosFumando*365) * qtdCigarroDia)

let totalDias = (totalMinutos/60)/24

console.log("Total de dias de vida perdido: ",Math.ceil(totalDias))
