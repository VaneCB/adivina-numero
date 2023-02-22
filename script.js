//Seleccionar los elementos del Dom y guardarlos en variables
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const messageField = document.querySelector('.message')
const checkButton = document.querySelector('.check')
const guessInput = document.querySelector('.guess')
const againButton = document.querySelector('.again')

//Crear las variables que necesitamos

const highScore = 0
const score = 20
const number = guessInput.value

//Creacioń de un número aleatorio
const MAX_NUMBER = 20
const MIN_NUMBER = 1
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
//const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber, number)

scoreField.textContent = 10

checkButton.addEventListener('click', function () {
  console.log(number, typeof number)
})
