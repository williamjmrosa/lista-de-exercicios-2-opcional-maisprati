// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')()

function calcularPesoIdeal(altura, sexo){
    let peso

    if(sexo == 'homem'){
        peso = 72.7 * altura - 58
    }else{
        peso = 62.1 * altura - 44.7
    }

    return peso
}

function lerAltura(){
    let valido = false

    let altura
    
    do{
        altura = Number(prompt('Entre com a altura(em metros): '))

        if(altura <= 0 || isNaN(altura)){
            console.log("Altura Inválida")
            valido = false
        }else{
            valido = true
        }
        
    }while(!valido)

    return altura

}

function lerSexo(){
    let valido = false
    let sexo
    do{
        console.log(" _______________\n",
                    "|      SEXO     |\n",
                    "| 1 - Masculino |\n",
                    "| 2 - Feminino  |\n",
                    "|_______________|\n")

        sexo = Number(prompt("Entre com o sexo (1 ou 2): "))

        if(sexo < 1 || sexo > 2 || isNaN(sexo)){
            console.log("Sexo Inválido")
            valido = false
        }else{
            valido = true
        }
        
    }while(!valido)

    return sexo == 1 ? 'homem' : 'mulher'

}

let continuar = false
do{
    let altura = lerAltura()
    let sexo = lerSexo()

    console.log("Peso Ideal: ", calcularPesoIdeal(altura, sexo).toFixed(2), "kg")

    let denovo = prompt("Deseja calcular novamente (s/n)? ").toLowerCase()

    continuar = (denovo == 's' || denovo == 'sim')

}while(continuar)