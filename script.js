//Seleccionar los elementos del Dom y guardarlos en variables
const scoreField = document.querySelector('.score')
scoreField.textContent = 10
const highScore = document.querySelector('.hightscore')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const checkButton = document.querySelector('.check')
const guessInput = document.querySelector('.guess')
const againButton = document.querySelector('.again')

const secretNumber = Math.trunc(Math.random() * 20) + 1

checkButton.addEventListener('click', function () {
  alert('Hola mundo')
})
