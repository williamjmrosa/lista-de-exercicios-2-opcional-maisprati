// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')()

const nomes = []
const idades = []
const tamanho = 3

function lerNome(posicao){
    let nome 

    let foi = false
    do{
        nome = prompt(`Digite o ${posicao+1}º nome : `)
        if(nome.trim() == ''){
            console.log('Entrada de nome inválida')
            foi = false
        }else{
            nomes.push(nome)
            foi = true
        }

    }while(!foi)
}

function lerIdade(posicao){
    let idade

    let foi = false
    do{
        idade = prompt(`Digite a ${posicao+1}º idade : `)
        if(isNaN(parseInt(idade)) || idade < 0 || Number.isInteger(Number(idade)) == false){
            console.log('Entrada de idade inválida')
            foi = false
        }else{
            idades.push(idade)
            foi = true
        }

    }while(!foi)
}

function menor(nome, idade){
    console.log("Pessoas menores de idade:")
    for(let i = 0; i < idades.length; i++){
        if(idades[i] < 18){
            console.log(`Nome: ${nome[i]} - Idade: ${idade[i]}`)
        }
    }
}

for(let i = 0; i < tamanho; i++){
    lerNome(i)

    lerIdade(i)
}

menor(nomes, idades)