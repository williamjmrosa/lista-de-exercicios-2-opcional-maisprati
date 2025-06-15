// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')()

const salarioAte = 350

class Pessoa {
    constructor(salario, filhos) {
        this.salario = salario
        this.filhos = filhos
    }
}

class Dados {
    constructor() {
        this.pessoas = []
        this.mediaSalario = 0
        this.mediaFilhos = 0
    }

    adicionarPessoa(pessoa) {
        this.pessoas.push(pessoa)
    }

    calcularMediaSalario() {
        if(this.pessoas.length == 0){
            return this.mediaSalario = 0
        }
        this.mediaSalario = this.pessoas.reduce((total, pessoa) => total + pessoa.salario, 0) / this.pessoas.length
    }

    calcularMediaFilhos() {
        if(this.pessoas.length == 0){
            return this.mediaFilhos = 0
        }
        this.mediaFilhos = this.pessoas.reduce((total, pessoa) => total + pessoa.filhos, 0) / this.pessoas.length
    }

    maiorSalario() {
        if (this.pessoas.length == 0) {
            return 0
        }

        let maiorSalario = this.pessoas.reduce((maior, pessoa) => {
            
            return pessoa.salario > maior ? pessoa.salario : maior

        }, 0)

        return maiorSalario
    }

    percentualSalario() {
        if (this.pessoas.length == 0) {
            return 0
        }
        let pessoasComSalarioAte = this.pessoas.filter(pessoa => pessoa.salario <= salarioAte).length
        return (pessoasComSalarioAte / this.pessoas.length) * 100
    }

}

function entradaSalario() {
    let salario
    let foi = false

    do {
        salario = Number(prompt("Entre com salário do funcionário: "))

        if (isNaN(salario) || salario < 0) {
            console.log("Salário Invalido")
            foi = false
        } else {
            foi = true
        }

    } while (!foi)

    return salario
}

function entradaFilhos() {
    let filhos
    let foi = false

    do {
        filhos = Number(prompt("Entre com o número de filhos do funcionário: "))

        if (isNaN(filhos) || filhos < 0) {
            console.log("Número de filhos Invalido")
            foi = false
        } else {
            foi = true
        }
    } while (!foi)

    return filhos
}

const dados = new Dados()

let continuar = true

while (continuar) {
    let salario = entradaSalario()
    let filhos = entradaFilhos()

    let pessoa = new Pessoa(salario, filhos)

    dados.adicionarPessoa(pessoa)

    let resposta = prompt('Deseja continuar (s/n): ').toLowerCase()

    continuar = (resposta == 's' || resposta == 'sim')
}

dados.calcularMediaSalario()
dados.calcularMediaFilhos()
let maiorSalario = dados.maiorSalario()
let percentualSalario = dados.percentualSalario()

console.log("Média de Salário: ", dados.mediaSalario.toFixed(2))
console.log("Média de Filhos: ", dados.mediaFilhos.toFixed(2))
console.log("Maior Salário: ", maiorSalario.toFixed(2))
console.log("Percentual de pessoas com salário até R$ 350,00: ", percentualSalario.toFixed(2))