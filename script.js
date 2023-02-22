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
let score = 20
const number = guessInput.value

//Creacioń de un número aleatorio
const MAX_NUMBER = 20
const MIN_NUMBER = 1
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
//const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber, number)

//Capturar el checkButton y agregarle un evento y mostrar un mensaje
//El mensaje tiene que decir si el numero es mayor o menor en el campo messageField
//Si es mayor o menor el score tiene que disminuir
checkButton.addEventListener('click', function () {
  const number = Number(guessInput.value)
  if (number > secretNumber) {
    messageField.textContent = 'El numero es mayor que el numero secreto'
    score = score - 1
    //score--
    scoreField.textContent = score
  } else if (number < secretNumber) {
    messageField.textContent = 'El numero es menor que el numero secreto'
    score = score - 1
    scoreField.textContent = score
  } else {
    messageField.textContent = '¡Ganaste!'
  }
  console.log(messageField)
})

numberField.addEventListener('acierto', function () {
  if (number === secretNumber) {
    console.log(number)
  }
})
