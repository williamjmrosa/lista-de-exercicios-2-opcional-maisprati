// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()

function eTriangulo(){
    let reta = []

    for(let i = 0; i < 3; i++){
        reta[i] = Number(prompt(`Entre com o comprimento do ${i+1}º segmento de reta: `))

        if(isNaN(reta[i]) || reta[i] <= 0){
            console.log(`Entra do ${i+1}º segmento de reta invalida`)
            i--
        }
    }

    if(reta[0] < (reta[1] + reta[2]) && reta[1] < (reta[0] + reta[2]) && reta[2] < (reta[0] + reta[1])){
        console.log("É possivel formar um triangulo com essa retas")
    }else{
        console.log("Não é possivel criar um triangulo com essas retas")
    }
}

eTriangulo()