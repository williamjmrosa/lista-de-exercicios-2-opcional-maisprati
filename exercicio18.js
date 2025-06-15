// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.
const prompt = require('prompt-sync')()

class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    mostrarSalario() {
        return this.salario.toFixed(2)
    }

    mostrarRegistro() {
        console.log("---------------------------",
            "\nNome Funcionario: ", this.nome,
            "\nCargo: ", this.cargo,
            "\nSalário: R$ ", this.mostrarSalario(),
            "\n---------------------------"
        )
    }
}

class Sistema {
    constructor() {
        this.funcionarios = []
    }

    menu() {
        let opcao
        do {
            console.log("  __________________________\n",
                         "|            MENU          |\n",
                         "| 1 - Inserir Funcionário  |\n",
                         "| 2 - Listar  Funcionários |\n",
                         "| 3 - Filtrar Funcionário  |\n",
                         "| 4 - Sair                 |\n",
                         "|__________________________|\n")
            opcao = Number(prompt("Escolha uma opção: "))

            switch (opcao) {
                case 1:
                    this.inserirFuncionario()
                    break;
                case 2:
                    this.listarFuncionarios()
                    break;
                case 3:
                    let filtro = this.entradaString("Entre com o nome do funcionário: ")
                    this.listarFuncionarios(filtro)
                    break;
                case 4:
                    console.log("Saindo...")
                    break;
                default:
                    console.log("Opção Inválida")
                    break;
            }

        } while (opcao != 4)
    }

    inserirFuncionario() {
        let proximo = false
        do {

            console.log("Entre com o registro do funcionário")

            let nome = this.entradaString("Entre com o nome do funcionário: ")

            let cargo = this.entradaString("Entre com o cargo do funcionário: ")

            let salario = this.entradaSalario("Salario")

            let fun = new Funcionario(nome, cargo, salario)

            this.funcionarios.push(fun)

            let repetir = prompt("Deseja inserir um novo registro (s/n): ").toLowerCase()

            proximo = (repetir == "s" || repetir == "sim")

        } while (proximo)
    }

    entradaString(mensagem) {
        let string
        let foi = false
        do {
            string = prompt(`${mensagem}`)

            if (string.trim() == "") {
                console.log("Entrada Inválida")
                foi = false
            } else {
                foi = true
            }
        } while (!foi)

        return string
    }

    entradaSalario() {
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

    listarFuncionarios(filtro = null) {

        let funcionarios = this.funcionarios

        if (filtro != null) {
            funcionarios = this.funcionarios.filter(funcionario => {
                return funcionario.nome.toLowerCase().includes(filtro.toLowerCase())
            })
        }

        console.log("Registros de Funcionários: ")

        if (funcionarios.length == 0) {
            console.log("Nenhum funcionario")
        } else {
            funcionarios.forEach(funcionario => {
                funcionario.mostrarRegistro()
            })

        }
    }

    iniciar(){
        this.menu()
    }
}

let sistema = new Sistema()
sistema.iniciar()