//Seleccionar los elementos del Dom y guardarlos en variables
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const messageField = document.querySelector('.message')
const checkButton = document.querySelector('.check')
const guessInput = document.querySelector('.guess')
const againButton = document.querySelector('.again')
const bodyField = document.querySelector('body')

//Crear las variables que necesitamos

let highScore = 0
let score

//Creacioń de un número aleatorio
const MAX_NUMBER = 20
const MIN_NUMBER = 1
let secretNumber
//const secretNumber = Math.trunc(Math.random() * 20) + 1

fnInitApp()

//Capturar el checkButton y agregarle un evento y mostrar un mensaje
//El mensaje tiene que decir si el numero es mayor o menor en el campo messageField
//Si es mayor o menor el score tiene que disminuir
checkButton.addEventListener('click', function () {
  const number = Number(guessInput.value)
  console.log(number, typeof number)
  if (number === secretNumber) {
    mostrarMensaje('¡Ganaste!')
    bodyField.style.backgroundColor = 'purple'
    numberField.textContent = secretNumber
    if (score > highScore) {
      highScore = highScoreField.textContent = score
      bodyField.style.backgroundColor = 'darkgreen'
      localStorage.setItem('highScore', highScore)
    }
  } else if (score === 1) {
    mostrarMensaje('Perdiste')
    scoreField.textContent = 0
    bodyField.style.backgroundColor = 'red'
  }

  //cambiar el color del fondo del body, mostrar numero secreto en vez de ?
  else {
    const mensaje =
      number > secretNumber
        ? 'El numero es mayor que el numero secreto'
        : 'El numero es menor que el numero secreto'
    mostrarMensaje(mensaje)
    score = score - 1
    scoreField.textContent = score
  }

  console.log(messageField)
})

function mostrarMensaje(mensaje) {
  messageField.textContent = mensaje
}

againButton.addEventListener('click', fnInitApp)

function fnInitApp() {
  score = 20
  scoreField.textContent = score
  guessInput.value = ''
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
  mostrarMensaje('Empieza a adivinar')
  bodyField.style.backgroundColor = 'black'
  numberField.textContent = '?'
  localStorage.getItem('highScore')
}
