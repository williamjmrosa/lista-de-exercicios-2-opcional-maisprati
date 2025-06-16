// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const TAMANHO_VETOR = 6

const prompt = require('prompt-sync')()

let vetor = []

console.log('Digite 6 numeros')
for(let i = 0; i < TAMANHO_VETOR; i++){
    let numero = prompt(`Digite o ${i+1}º numero : `)

    if(isNaN(parseInt(numero)) || Number.isInteger(Number(numero)) == false){
        console.log('Entrada de numero inválida deve ser um numero inteiro')
        i--
        
    }else{
        vetor.push(Number(numero))
    }
}

let opcao

do{
    console.log("  __________________________\n",
                 "|            MENU           |\n",
                 "| 1 - Soma dos Elementos    |\n",
                 "| 2 - Produto dos Elementos |\n",
                 "| 3 - Média dos Elementos   |\n",
                 "| 4 - Ordem Crescente       |\n",
                 "| 5 - Mostrar Vetor         |\n",
                 "| 6 - Sair                  |\n",
                 "|___________________________|\n")
    opcao = Number(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1:
            let soma
            
            soma = vetor.reduce((total, valor) => total + valor, 0)

            console.log("Soma dos Elementos: ", soma)
            break;
        case 2:
            let produto

            produto = vetor.reduce((total, valor) => total * valor, 1)

            console.log("Produto dos Elementos: ", produto)
            break;
        case 3:
            let media = 0

            media = vetor.reduce((total, valor) => total + valor, 0)/vetor.length

            console.log("Média dos Elementos: ", media)
            break;
        case 4:
            console.log("Ordem Crescente: ", vetor.slice().sort((a,b) => a - b).join(", "))
            break;
        case 5:
            console.log("Vetor: ", vetor.join(", "))
            break;
        case 6:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            break;
    }
}while(opcao != 6)