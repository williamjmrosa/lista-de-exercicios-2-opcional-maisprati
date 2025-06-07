// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km
const prompt = require('prompt-sync')()

// const aluguelPopular = 90
// const aluguelLuxo = 150

// const custoPopulaKmAte100 = 0.20
// const custoPopularKmMaisDe100 = 0.10

// const custoLuxoKmAte200 = 0.30
// const custoLuxoKmMais200 = 0.25

class aluguelCarro{

    constructor(tipoCarro, diasAlugados, kmPercorridos){
        this.tipoCarro = tipoCarro
        this.diasAlugados = diasAlugados
        this.kmPercorridos = kmPercorridos
        this.aluguelPopular = 90
        this.aluguelLuxo = 150
        this.custoPopulaKmAte100 = 0.20
        this.custoPopularKmMaisDe100 = 0.10
        this.custoLuxoKmAte200 = 0.30
        this.custoLuxoKmMais200 = 0.25
        this.precoAluguel = this.calcularPrecoAluguel()
    }

    calcularPrecoAluguel(){
        
        let preco

        if(this.tipoCarro == 1){
            preco = (this.diasAlugados * this.aluguelPopular) + (this.kmPercorridos * (this.kmPercorridos > 100 ? this.custoPopularKmMaisDe100 : this.custoPopulaKmAte100))
        }else{
            preco = (this.diasAlugados * this.aluguelLuxo) + (this.kmPercorridos * (this.kmPercorridos > 200 ? this.custoLuxoKmMais200 : this.custoLuxoKmAte200))
        }

        return preco
    
    }

    verPrecoAluguel(){
        console.log("O valor do Aluguem do Carro é R$ ", this.precoAluguel.toFixed(2))
    }

}

let alugarNovamente = false

do{

    console.log(" ______________________________\n",
                "| Escolha um aluguel de carro |\n",
                "| 1 - Carro Popular           |\n",
                "| 2 - Carro de Luxo           |\n",
                "|_____________________________|\n")

    let carroEscolhido
    let diasAlugados
    let kmPercorridos

    for(let i = 0; i < 3; i++){

        if(i == 0){
            carroEscolhido = Number(prompt("Escolha um aluguel de carro: "))
             if(carroEscolhido < 1 || carroEscolhido > 2 || isNaN(carroEscolhido)){
                console.log("Escolha de aluguel Inválida")
                i--
             }
        }else if(i == 1){
            diasAlugados = Number(prompt("Quantos dias alugados? "))
            if(diasAlugados < 1 || isNaN(diasAlugados)){
                console.log("Entrada de dias inválida (deve ser no minimo 1 dia)")
                i--
            }
        }else{
            kmPercorridos = Number(prompt("Quantos Km percorridos? "))
            if(kmPercorridos < 1 || isNaN(kmPercorridos)){
                console.log("Entrada de Km percorridos Inválida (deve ser no minimo 1 KM)")
            }
        }
    }

    let aluguelDeCarro = new aluguelCarro(carroEscolhido,diasAlugados,kmPercorridos)

    aluguelDeCarro.verPrecoAluguel()

    let denovo = prompt('Desejá calcular o aluguel de outro carro (s/n)? ').toLowerCase()

    if(denovo == 's' || denovo == 'sim'){
        alugarNovamente = true
    }else{
        alugarNovamente = false
    }

}while(alugarNovamente)