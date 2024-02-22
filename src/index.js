let nome = prompt("Escreva o nome do seu Herói:")
let nivel

do {
    nivel = prompt("Digite o nível do " + nome + " somente com números, lembrando que o nível máximo é 15 mil:")
    nivel = parseInt(nivel)
} while (isNaN(nivel) || nivel <= 0 || nivel > 15000)

if (nivel <= 1000) {
  alert("O Herói de nome " + nome + " está no nível Ferro")
} else if (nivel > 1000 && nivel <= 2000) {
  alert("O Herói de nome " + nome + " está no nível Bronze")
} else if (nivel > 2000 && nivel <= 5000) {
  alert("O Herói de nome " + nome + " está no nível Prata")
} else if (nivel > 5000 && nivel <= 7000) {
  alert("O Herói de nome " + nome + " está no nível Ouro")
} else if (nivel > 7000 && nivel <= 8000) {
  alert("O Herói de nome " + nome + " está no nível Platina")
} else if (nivel > 8000 && nivel <= 9000) {
  alert("O Herói de nome " + nome + " está no nível Ascendente")
} else if (nivel > 9000 && nivel <= 10000) {
  alert("O Herói de nome " + nome + " está no nível Imortal")
} else {
  alert("O Herói de nome " + nome + " está no nível Radiante")
}