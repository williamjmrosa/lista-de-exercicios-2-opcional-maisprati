// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).
const deducaoINSSPercentual = 0.12

const prompt = require("prompt-sync")()

let funcionarios = []

class Funcionario {
    constructor(matricula, nome, salarioBruto) {
        this.matricula = matricula
        this.nome = nome
        this.salarioBruto = salarioBruto
        this.deducaoINSS = this.calcularDescontoINSS()
        this.salarioLiquido = this.calcularSalarioLiquido()

    }

    calcularSalarioLiquido() {
        let salarioLiquido = this.salarioBruto - this.deducaoINSS

        return salarioLiquido
    }

    calcularDescontoINSS() {
        return this.salarioBruto * deducaoINSSPercentual
    }

    gerarContracheque() {
        console.log("+++++++++++++++ Contracheque ++++++++++++",
            `\nMatricula: ${this.matricula},`,
            `\nNome: ${this.nome}`,
            `\nSalário Bruto: R$ ${this.salarioBruto.toFixed(2)}`,
            `\nDedução INSS: R$ ${this.deducaoINSS.toFixed(2)}`,
            `\nSalário Líquido: R$ ${this.salarioLiquido.toFixed(2)}`,
            "\n+++++++++++++++++++++++++++++++++++++++++++++++")
    }

}

function entradaString(mensagem) {
    let string
    let foi = false
    do {
        string = prompt(`${mensagem}`)

        if (string.trim() == "") {
            console.log("Entrada Inválida campo vazio")
            foi = false
        } else {
            foi = true
        }
    } while (!foi)

    return string
}

function entradaSalario() {
    let salario
    let foi = false

    do {
        salario = Number(prompt("Entre com salário bruto do funcionário: "))

        if (isNaN(salario) || salario < 0) {
            console.log("Salário Invalido!")
            foi = false
        } else {
            foi = true
        }

    } while (!foi)

    return salario
}

let continuar

do{
    let matricula = entradaString("Entre com a matricula do funcionário: ")

    let nome = entradaString("Entre com o nome do funcionário: ")

    let salarioBruto = entradaSalario()

    let repetir = prompt("Deseja inserir um novo funcionario (s/n): ").toLowerCase()

    continuar = (repetir == "s" || repetir == "sim")

    let funcionario = new Funcionario(matricula, nome, salarioBruto)

    funcionarios.push(funcionario)
}while(continuar)

console.log("=============== Folha de Pagamento ===============\n")

funcionarios.forEach(funcionario => {
    funcionario.gerarContracheque()
})

console.log("==================================================")
