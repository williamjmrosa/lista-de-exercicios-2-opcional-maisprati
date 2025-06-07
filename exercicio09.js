// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')()

let salarios = []

salarios['homens'] = 0
salarios['mulheres'] = 0

function lerSalario(){
    let valido = false
    
    let salario

    do{
        salario = Number(prompt('Entre com o salário: '))

        if(salario <= 0 || isNaN(salario)){
            console.log("Salário Inválido")
            valido = false
        }else{
            valido = true
        }
        
    }while(!valido)

    return salario
}

function lerSexo(){
    let valido = false

    let sexo

    console.log(" _______________\n",
                "|      SEXO     |\n",
                "| 1 - Masculino |\n",
                "| 2 - Feminino  |\n",
                "|_______________|\n")

    do{
        sexo = Number(prompt("Entre com o sexo (1 ou 2): "))

        if(sexo < 1 || sexo > 2 || isNaN(sexo)){
            console.log("Sexo Inválido")
            valido = false
        }else{
            valido = true
        }
    }while(!valido)

    return sexo == 1 ? 'homens' : 'mulheres'

}

function calcularSalarios(salarios, sexo, salario){
    if(sexo == 'homens'){
        salarios['homens'] += salario
    }else{
        salarios['mulheres'] += salario
    }
}

let continuar = true

while(continuar){
    let salario = lerSalario()
    let sexo = lerSexo()

    calcularSalarios(salarios, sexo, salario)

    let resposta = prompt('Deseja continuar (s/n): ').toLowerCase() 

    continuar = (resposta == 's' || resposta == 'sim')
}

console.log("Total de Salários de Homens: R$ ", salarios['homens'].toFixed(2))
console.log("Total de Salários de Mulheres: R$ ", salarios['mulheres'].toFixed(2))
