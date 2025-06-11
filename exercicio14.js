// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')()

const nomes = []

console.log('Digite 7 nomes: ')
for(let i = 0; i < 7; i++){
    let nome = prompt(`Digite o ${i+1}º nome : `)

    if(nome.trim() == ''){
        console.log('Entrada de nome inválida')
        i--
        
    }else{
        nomes.push(nome)
    }
}

console.log(nomes.slice().reverse().join(", "))