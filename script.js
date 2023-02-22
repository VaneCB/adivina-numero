//Seleccionar los elementos del Dom y guardarlos en variables
const scoreField = document.querySelector('.score')
scoreField.textContent = 10
console.log(scoreField)
const highScore = document.querySelector('.highscore')
console.log(highScore)
const number = document.querySelector('.number')
console.log(number)
const messageField = document.querySelector('.message')
console.log(messageField)
const checkButton = document.querySelector('.check')
console.log(checkButton)
const guessInput = document.querySelector('.guess')
console.log(guessInput)
const againButton = document.querySelector('.again')
console.log(againButton)
//Creacioń de un número aleatorio
const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)

checkButton.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value)
  console.log(guessInput, typeof guessInput)
})
