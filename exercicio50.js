// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.
// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync')()

let ID_RESERVA = 1
let ID_HOTEL = 1

class Hotel {
    constructor(id, nome, cidade, quartosTotais) {
        this.id = id
        this.nome = nome
        this.cidade = cidade
        this.quartosTotais = quartosTotais
        this.quartosDisponiveis = quartosTotais
        this.quartosOcupados = 0 
        this.avaliacoes = [] 
    }

    getMediaAvaliacoes() {
        if (this.avaliacoes.length === 0) {
            return "Nenhuma avaliação";
        }
        const soma = this.avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
        return (soma / this.avaliacoes.length).toFixed(1) + " / 5.0";
    }

    mostrarDetalhes() {
        console.log(`=================================================`)
        console.log(` ID: ${this.id}`)
        console.log(` Nome: ${this.nome}`)
        console.log(` Cidade: ${this.cidade}`)
        console.log(` Quartos Totais: ${this.quartosTotais}`)
        console.log(` Quartos Disponíveis (para reservar): ${this.quartosDisponiveis}`)
        console.log(` Quartos Ocupados (Hospedados): ${this.quartosOcupados}`)
        console.log(` Avaliação Média: ${this.getMediaAvaliacoes()}`)
    }

    mostrarIdNomeCidade() {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Cidade: ${this.cidade} | Avaliação: ${this.getMediaAvaliacoes()}`)
    }
}

class Reserva {
    constructor(idReserva, idHotel, nomeCliente) {
        this.idReserva = idReserva
        this.idHotel = idHotel
        this.nomeCliente = nomeCliente
        this.status = 'Pendente'
    }
}

class Reservas {
    constructor() {
        this.hoteis = []
        this.reservas = []
    }

    adicionarHotel(hotel) {
        this.hoteis.push(hotel)
    }

    buscarHoteisPorCidade(cidade) {
        const cidadeNormalizada = this.normalizarString(cidade);

        const hoteisEncontrados = this.hoteis.filter(hotel => {
            const hotelCidadeNormalizada = this.normalizarString(hotel.cidade);
            return hotelCidadeNormalizada.includes(cidadeNormalizada);
        });

        if (hoteisEncontrados.length === 0) {
            console.log("Nenhum hotel encontrado para esta cidade.")
            return;
        }

        console.log(`\n--- Hotéis Encontrados em "${cidade}" ---`)
        for (const hotel of hoteisEncontrados) {
            hotel.mostrarIdNomeCidade()
        }
        console.log("----------------------------------------\n")
    }

    fazerReserva(idReserva, idHotel, nomeCliente) {
        const hotel = this.encontrarHotel(idHotel);
        if (!hotel) return; 

        if (hotel.quartosDisponiveis > 0) {
            hotel.quartosDisponiveis--
            this.reservas.push(new Reserva(idReserva, idHotel, nomeCliente))
            console.log(`\n*** Reserva ${idReserva} (Pendente) para ${nomeCliente} no ${hotel.nome} confirmada! ***\n`)
        } else {
            console.log(`Desculpe, o ${hotel.nome} não possui quartos disponíveis para reserva.`)
        }
    }

    checkIn(idReserva) {
        const reserva = this.encontrarReserva(idReserva);
        if (!reserva) return;

        if (reserva.status !== 'Pendente') {
            console.log(`Erro: A reserva ${idReserva} não está pendente (Status: ${reserva.status}).`);
            return;
        }

        const hotel = this.encontrarHotel(reserva.idHotel);
        if (!hotel) return;

        reserva.status = 'Hospedado';
        hotel.quartosOcupados++;
        console.log(`\n*** Check-in da reserva ${idReserva} (Cliente: ${reserva.nomeCliente}) realizado com sucesso! ***\n`);
    }

    checkOut(idReserva) {
        const reservaIndex = this.encontrarReservaPorIndice(idReserva);
        if (reservaIndex === -1) return;

        const reserva = this.reservas[reservaIndex];

        if (reserva.status !== 'Hospedado') { 
            console.log(`Erro: A reserva ${idReserva} não está com status 'Hospedado'. Não é possível fazer check-out.`);
            return;
        }
        
        const hotel = this.encontrarHotel(reserva.idHotel);
        if (hotel) {
            hotel.quartosDisponiveis++; 
            hotel.quartosOcupados--; 
        }
        
        this.reservas.splice(reservaIndex, 1);
        console.log(`\n*** Check-out da reserva ${idReserva} (Cliente: ${reserva.nomeCliente}) realizado. Quarto liberado. ***\n`);
        console.log(`Obrigado pela preferência, ${reserva.nomeCliente}! Considere deixar uma avaliação.`);
    }

    cancelarReserva(idReserva) {
        const reservaIndex = this.encontrarReservaPorIndice(idReserva);
        if (reservaIndex === -1) return;

        const reserva = this.reservas[reservaIndex];

        if (reserva.status !== 'Pendente') {
            console.log(`Erro: Esta reserva está com status '${reserva.status}'. Use a função de Check-Out.`);
            return;
        }

        const hotel = this.encontrarHotel(reserva.idHotel);
        if (hotel) {
            hotel.quartosDisponiveis++; 
        }

        this.reservas.splice(reservaIndex, 1);
        console.log(`\n*** Reserva ${idReserva} (Pendente) cancelada. Quarto liberado. ***\n`);
    }

    avaliarHotel(idHotel) {
        const hotel = this.encontrarHotel(idHotel);
        if (!hotel) return;

        console.log(`\nAvaliando o hotel: ${hotel.nome} (ID: ${hotel.id})`);
        let nota;
        let notaValida = false;
        do {
            nota = Number(prompt("Digite sua nota (de 1 a 5): "));
            if (!isNaN(nota) && nota >= 1 && nota <= 5 && Number.isInteger(nota)) {
                notaValida = true;
            } else {
                console.log("Erro: Nota inválida. Deve ser um número inteiro entre 1 e 5.");
            }
        } while (!notaValida);

        const comentario = prompt("Digite um comentário (opcional): ");
        hotel.avaliacoes.push({ nota, comentario });

        console.log(`\n*** Obrigado! Avaliação do ${hotel.nome} registrada com sucesso. ***\n`);
    }

    gerarRelatorioOcupacao(idHotel) {
        const hotel = this.encontrarHotel(idHotel);
        if (!hotel) return;

        const ocupados = hotel.quartosOcupados;
        const totais = hotel.quartosTotais;
        const taxaOcupacao = (totais > 0) ? (ocupados / totais) * 100 : 0;

        console.log(`\n--- Relatório de Ocupação: ${hotel.nome} ---`);
        console.log(` Quartos Totais: ${totais}`);
        console.log(` Quartos Ocupados (Hospedados): ${ocupados}`);
        console.log(` Quartos Disponíveis (para reserva): ${hotel.quartosDisponiveis}`);
        console.log(` Taxa de Ocupação Atual: ${taxaOcupacao.toFixed(2)}%`);
        console.log(`----------------------------------------------\n`);
    }

    verAvaliacoes(idHotel) {
        const hotel = this.encontrarHotel(idHotel);
        if (!hotel) return; 

        console.log(`\n--- Exibindo Avaliações de: ${hotel.nome} (ID: ${hotel.id}) ---`);
        console.log(` Avaliação Média Geral: ${hotel.getMediaAvaliacoes()}`);

        if (hotel.avaliacoes.length === 0) {
            console.log(" Este hotel ainda não possui avaliações individuais.");
            console.log("----------------------------------------------------------\n");
            return;
        }

        for (const avaliacao of hotel.avaliacoes) {
            console.log("=================================");
            console.log(` Nota: ${avaliacao.nota} / 5`);
            console.log(` Comentário: ${avaliacao.comentario || "(Sem comentário)"}`); 
        }
        console.log("=================================\n");
    }

    listarReservas() {
        console.log("\n--- Lista de Todas as Reservas ---")

        if (this.reservas.length === 0) {
            console.log("Nenhuma reserva ativa no momento.")
            console.log("----------------------------------\n")
            return;
        }

        for (const reserva of this.reservas) {
            const hotel = this.encontrarHotel(reserva.idHotel);
            const nomeHotel = hotel ? hotel.nome : "Hotel Desconhecido";
            
            console.log("==================================================")
            console.log(` ID Reserva: ${reserva.idReserva}`)
            console.log(` Cliente: ${reserva.nomeCliente}`)
            console.log(` Hotel: ${nomeHotel} (ID: ${reserva.idHotel})`)
            console.log(` Status: ${reserva.status}`) 
        }
        console.log("==================================================\n")
    }

    listarHoteis(completo = true) {
        console.log("\n--- Lista de Hotéis Cadastrados ---")
        if (this.hoteis.length === 0) {
            console.log("Nenhum hotel cadastrado.")
            console.log("-----------------------------------\n")
            return;
        }

        for (const hotel of this.hoteis) {
            completo ? hotel.mostrarDetalhes() : hotel.mostrarIdNomeCidade()
        }

        if (completo) console.log("=================================================\n");
        else console.log("----------------------------------------\n");
    }

    encontrarHotel(idHotel) {
        const hotel = this.hoteis.find(h => h.id == idHotel);
        if (!hotel) {
            console.log("Erro: Hotel com ID " + idHotel + " não encontrado.")
            return null;
        }
        return hotel;
    }

    encontrarReserva(idReserva) {
        const reserva = this.reservas.find(r => r.idReserva == idReserva);
        if (!reserva) {
            console.log("Erro: Reserva com ID " + idReserva + " não encontrada.")
            return null;
        }
        return reserva;
    }

    encontrarReservaPorIndice(idReserva) {
        const reservaIndex = this.reservas.findIndex(r => r.idReserva == idReserva);
        if (reservaIndex === -1) {
            console.log("Erro: Reserva com ID " + idReserva + " não encontrada.")
            return -1;
        }
        return reservaIndex;
    }

    validarInteiro(inteiro) {
        const foiValido = !isNaN(inteiro) && Number.isInteger(inteiro) && inteiro > 0
        if (!foiValido) console.log("Erro: A entrada deve ser um número inteiro positivo.")
        return foiValido
    }

    validarString(string) {
        const foiValido = typeof string === 'string' && string.trim() !== ""
        if (!foiValido) console.log("Erro: A entrada não pode estar vazia.")
        return foiValido
    }

    normalizarString(str) {
        if (typeof str !== 'string') return "";
        return str.toLowerCase()
                  .normalize("NFD") 
                  .replace(/[\u0300-\u036f]/g, "");
    }

    menu() {
        let opcao
        do {
            console.log("  _________________________________\n",
                         "|               MENU              |\n",
                         "| 1 - Fazer Reserva (Pendente)    |\n",
                         "| 2 - Fazer Check-In              |\n",
                         "| 3 - Fazer Check-Out             |\n",
                         "| 4 - Cancelar Reserva (Pendente) |\n",
                         "| 5 - Listar Reservas             |\n",
                         "| 6 - Buscar Hotéis por Cidade    |\n",
                         "| 7 - Adicionar Hotel             |\n",
                         "| 8 - Listar Hotéis (Detalhes)    |\n",
                         "| 9 - Avaliar Hotel               |\n",
                         "| 10 - Relatório de Ocupação      |\n",
                         "| 11 - Ver Avaliações de um Hotel |\n",
                         "| 12 - Sair                       |\n",
                         "|_________________________________|\n")
            opcao = Number(prompt("Escolha uma opção: "))

            switch (opcao) {
                case 1: // FAZER RESERVA
                    console.log("\n--- Fazer Reserva ---")
                    if (this.hoteis.length === 0) {
                        console.log("Nenhum hotel cadastrado. Adicione um hotel primeiro.\n");
                        break;
                    }
                    console.log("Escolha o Hotel:")
                    this.listarHoteis(false) 

                    let idHotelValido = false
                    let clienteValido = false
                    let idHotelReserva
                    let nomeCliente
                    do {
                        if (!idHotelValido) {
                            idHotelReserva = Number(prompt("Digite o ID do hotel: "))
                            idHotelValido = !!this.encontrarHotel(idHotelReserva) 
                        }
                        if (!clienteValido) {
                            nomeCliente = prompt("Digite o nome do cliente: ")
                            clienteValido = this.validarString(nomeCliente)
                        }
                    } while (!idHotelValido || !clienteValido)

                    this.fazerReserva(ID_RESERVA++, idHotelReserva, nomeCliente)
                    break;

                case 2: // CHECK-IN
                    console.log("\n--- Fazer Check-In ---")
                    if (this.reservas.length === 0) {
                        console.log("Nenhuma reserva para fazer check-in.\n");
                        break;
                    }
                    this.listarReservas();
                    let idCheckIn = Number(prompt("Digite o ID da reserva para Check-In: "));
                    if(this.validarInteiro(idCheckIn)) {
                        this.checkIn(idCheckIn);
                    }
                    break;

                case 3: // CHECK-OUT
                    console.log("\n--- Fazer Check-Out ---")
                    if (this.reservas.length === 0) {
                        console.log("Nenhuma reserva para fazer check-out.\n");
                        break;
                    }
                    this.listarReservas();
                    let idCheckOut = Number(prompt("Digite o ID da reserva para Check-Out: "));
                    if(this.validarInteiro(idCheckOut)) {
                        this.checkOut(idCheckOut);
                    }
                    break;

                case 4: // CANCELAR RESERVA PENDENTE
                    console.log("\n--- Cancelar Reserva (Pendente) ---")
                    if (this.reservas.length === 0) {
                        console.log("Nenhuma reserva para cancelar.\n");
                        break;
                    }
                    this.listarReservas();
                    let idReservaCancelar = Number(prompt("Digite o ID da reserva (Pendente) que deseja cancelar: "));
                    if(this.validarInteiro(idReservaCancelar)) {
                        this.cancelarReserva(idReservaCancelar);
                    }
                    break;

                case 5: // LISTAR RESERVAS
                    this.listarReservas()
                    break;

                case 6: // BUSCAR HOTÉIS
                    console.log("\n--- Buscar Hotéis por Cidade ---")
                    if (this.hoteis.length === 0) {
                        console.log("Nenhum hotel cadastrado para buscar.\n");
                        break;
                    }
                    let cidade = prompt("Digite a cidade que deseja buscar: ");
                    if(this.validarString(cidade)) {
                        this.buscarHoteisPorCidade(cidade);
                    }
                    break;

                case 7: // ADICIONAR HOTEL
                    console.log("\n--- Adicionar Novo Hotel ---")
                    let nomeValido = false, cidadeValidaHotel = false, quartosValido = false
                    let nomeHotel, cidadeHotel, quartosHotel
                    do {
                        if (!nomeValido) {
                            nomeHotel = prompt("Digite o nome do hotel: ")
                            nomeValido = this.validarString(nomeHotel)
                        }
                        if (!cidadeValidaHotel) {
                            cidadeHotel = prompt("Digite a cidade do hotel: ")
                            cidadeValidaHotel = this.validarString(cidadeHotel)
                        }
                        if (!quartosValido) {
                            quartosHotel = Number(prompt("Digite a quantidade total de quartos: "))
                            quartosValido = this.validarInteiro(quartosHotel)
                        }
                    } while (!nomeValido || !cidadeValidaHotel || !quartosValido)

                    this.adicionarHotel(new Hotel(ID_HOTEL++, nomeHotel, cidadeHotel, quartosHotel))
                    console.log(`\n*** Hotel ${nomeHotel} em ${cidadeHotel} adicionado com sucesso! ***\n`)
                    break;

                case 8: // LISTAR HOTÉIS
                    this.listarHoteis(true)
                    break;
                
                case 9: // AVALIAR HOTEL
                    console.log("\n--- Avaliar Hotel ---")
                    if (this.hoteis.length === 0) {
                        console.log("Nenhum hotel cadastrado para avaliar.\n");
                        break;
                    }
                    this.listarHoteis(false); 
                    let idHotelAvaliar = Number(prompt("Digite o ID do hotel que deseja avaliar: "));
                    if(this.validarInteiro(idHotelAvaliar)) {
                        this.avaliarHotel(idHotelAvaliar);
                    }
                    break;
                
                case 10: // RELATÓRIO DE OCUPAÇÃO
                    console.log("\n--- Relatório de Ocupação ---")
                    if (this.hoteis.length === 0) {
                        console.log("Nenhum hotel cadastrado para gerar relatório.\n");
                        break;
                    }
                    this.listarHoteis(false);
                    let idHotelRelatorio = Number(prompt("Digite o ID do hotel para ver o relatório: "));
                    if(this.validarInteiro(idHotelRelatorio)) {
                        this.gerarRelatorioOcupacao(idHotelRelatorio);
                    }
                    break;
                
                case 11: // VER AVALIAÇÕES
                    console.log("\n--- Ver Avaliações de um Hotel ---")
                    if (this.hoteis.length === 0) {
                        console.log("Nenhum hotel cadastrado para ver avaliações.\n");
                        break;
                    }
                    this.listarHoteis(false); 
                    let idHotelAvaliacoes = Number(prompt("Digite o ID do hotel para ver as avaliações: "));
                    if(this.validarInteiro(idHotelAvaliacoes)) {
                        this.verAvaliacoes(idHotelAvaliacoes);
                    }
                    break;

                case 12: // SAIR
                    console.log("Saindo do sistema...")
                    break;

                default:
                    console.log("Opção inválida. Tente novamente.")
                    break
            }
        } while (opcao != 12)
    }
}

const reservas = new Reservas()

reservas.adicionarHotel(new Hotel(ID_HOTEL++, 'Hotel Copacabana', 'Rio de Janeiro', 100))
reservas.adicionarHotel(new Hotel(ID_HOTEL++, 'Hotel Ibis', 'São Paulo', 200))
reservas.adicionarHotel(new Hotel(ID_HOTEL++, 'Hotel Fasano', 'Rio de Janeiro', 150))
reservas.adicionarHotel(new Hotel(ID_HOTEL++, 'Hotel da Cidade', 'Belo Horizonte', 80))

reservas.menu()