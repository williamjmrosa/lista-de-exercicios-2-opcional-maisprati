// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

function lerNumeros(){

    let somatorio
    let menor = 0
    let media
    let qtdPares = 0
    let interacoes = 0

    let continuar = false

    do{

        let numero = prompt("Entre com um numero? ")

        if(isNaN(Number(numero)) || numero == ""){
            console.log("Entrada não é um número!")
            continuar = true
        }else{
            numero = Number(numero)
            qtdPares += numero % 2 == 0 ? 1 : 0
            somatorio = interacoes == 0 ? numero : somatorio + numero
            menor = menor > numero || interacoes == 0 ? numero : menor
            interacoes++

            let repetir = prompt("Deseja com inserir mais números (s/n)? ")
            continuar = (repetir == 's' || repetir == 'sim')
        }

        

    }while(continuar)

    if(interacoes == 0){
        console.log("Nenhum número foi inserido")
        return;
    }

    media = somatorio/interacoes

    console.log("Somatório de todos os valores é ",somatorio)

    console.log("O menor valor digitado é ",menor)

    console.log("A média de todos os valores é ",media)

    console.log("Quantidade de valores pares ",qtdPares)
}

lerNumeros()