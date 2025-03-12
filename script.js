/*
let escolha

while(true){
    escolha = prompt('Escolha uma opção de 1 a 4 ou digite "Encerrar"')
    switch (escolha){
        case "1":
            alert("Opção 1 escolhida")
            continue
        case "2":
            alert("Opção 2 escolhida")
            continue
        case "3":
            alert("Opção 3 escolhida")
            continue
        case "4":
            alert("Opção 4 escolhida")
            continue
        case "Encerrar":
            alert("Programa encerrado")
            break
        default:
            alert("Opção inválida. Escolha uma opção válida")
            continue
    }
    break
}
*/

let dinheiroBanco, dinheiroMao, choice, depositosaque

dinheiroBanco = parseFloat(prompt("Quanto dinheiro você tem no banco?"))
dinheiroMao = parseFloat(prompt("Quanto dinheiro você tem na mão?"))

while(true){
    choice = prompt("Escolha uma opção: \nD - Depositar \nS - Sacar \nE - Encerrar")
    switch(choice){
        case "D":
           depositosaque = parseFloat(prompt("Quanto gostaria de depositar? \nDinheiro no banco - " + dinheiroBanco + " R$" + "\nDinheiro na mão - " + dinheiroMao + " R$"))
            while(depositosaque > dinheiroMao){
                alert("Você não essa quantia para depositar.")
                depositosaque = parseFloat(prompt("Quanto gostaria de depositar?"))
            }
            dinheiroBanco += depositosaque
            dinheiroMao -= depositosaque
            alert("Agora você tem " + dinheiroBanco + " no banco")
            continue

        case "S":
           depositosaque = parseFloat(prompt("Quanto gostaria de Sacar? \nDinheiro no banco - " + dinheiroBanco + " R$" + "\nDinheiro na mão - " + dinheiroMao + " R$"))
            while(depositosaque > dinheiroBanco){
                alert("Você não essa quantia para Sacar.")
                depositosaque = parseFloat(prompt("Quanto gostaria de Sacar?"))
            }
            dinheiroMao += depositosaque
            dinheiroBanco -= depositosaque
            alert("Agora você tem " + dinheiroMao + " na mão")
            continue

        case "E":
            alert("programa encerrado.")
            break
        default:
            alert("Seleciona uma opção válida.")
            continue
    }
    break
}