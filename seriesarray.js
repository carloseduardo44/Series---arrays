const prompt = require('prompt-sync')()

let series = []
let pergunta = "sim"

while (pergunta == "sim" || pergunta == "SIM"){
    series.push(prompt("Digite o nome da serie: "))

    pergunta = prompt("Deseja adicionar uma nova serie?: ")
    
    if(pergunta != "sim" && pergunta != "SIM"){
        pergunta = "nao"
    }
}

for(let indice = 0; indice < series.length; indice++ ){
    console.log(`Posição ${indice} série: ${series[indice]}`)
}