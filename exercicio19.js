// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.
const quantidadeHorarios = 5
const prompt = require('prompt-sync')()
let horarios = []

function validaHora(horas){
    let h = horas.split(".")
    let hora = h[0] ? Number(h[0]) : null
    let minutos = h[1] ? Number(h[1]) : null
    let segundos = h[2] ? Number(h[2]) : null

    if(hora < 0 || hora > 23 || hora == null || isNaN(hora)){
        hora = false
        console.log("Hora Invalida")
    }

    if(minutos < 0 || minutos > 59 || minutos == null || isNaN(minutos)){
        minutos = false
        console.log("Minutos Invalidos")
    }

    if(segundos < 0 || segundos > 59 || segundos == null || isNaN(segundos)){
        segundos = false
        console.log("Segundos invalidos")
    }

    if(hora == false || minutos == false || segundos == false){
        return [false]
    }else{
        return [true, String(hora).padStart(2, "0") + "." + String(minutos).padStart(2, "0") + "." + String(segundos).padStart(2, "0")]
    }

}
console.log("Entre com 5 horarios")
for(let i = 0; i < quantidadeHorarios; i++){
    let horario = prompt(`Entrada do ${i+1}º Horario formato(HH.MM.SS): `)
    let resposta = validaHora(horario)
    if(!resposta[0]){
        i--
    }else{
        horarios.push(resposta[1])
    }
}

console.log("Horarios cadastrados\n",horarios.join("\n"))