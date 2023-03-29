let resposta = prompt("Você deseja comer mais uma coxinha?")
let conta = 0

while (resposta.toLowerCase() === "s") {
    conta = conta + 2.50
    resposta = prompt("Você deseja comer mais uma coxinha?")
}
console.log(`O total da sua conta foi de: R$ ${conta}`)

