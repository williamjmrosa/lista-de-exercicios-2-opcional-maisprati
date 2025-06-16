// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const TAMANHO_VETOR_GABARITO = 20
const NUMERO_ALUNOS = 50

const MIN = 0
const MAX = 1

let gabarito = []

let alunos = []

function sortear(){
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

function gerarVetorRespostas(){
    let respostas = []
    for(let i = 0; i < TAMANHO_VETOR_GABARITO; i++){
        respostas.push(sortear())
    }
    return respostas
}

function verificarAcertos(gabarito, respostas){
    let acertos = 0
    for(let i = 0; i < TAMANHO_VETOR_GABARITO; i++){
        if(gabarito[i] == respostas[i]){
            acertos++
        }
    }
    return acertos
}

function verificarAprovacao(acertos){
    if(acertos >= 12){
        return "APROVADO"
    }else{
        return "REPROVADO"
    }
}

gabarito = gerarVetorRespostas()

for(let i = 0; i < NUMERO_ALUNOS; i++){
    alunos.push(gerarVetorRespostas())
}

for(let i = 0; i < NUMERO_ALUNOS; i++){
    let acertos = verificarAcertos(gabarito, alunos[i])
    console.log(`Aluno ${i + 1}: ${acertos} acertos. ${verificarAprovacao(acertos)}`)
}