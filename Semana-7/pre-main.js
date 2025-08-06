const tag = document.getElementsByTagName('p')
console.log(tag)
const className = document.getElementsByClassName('cart')
console.log(className)
const boton = document.getElementById('cart-btn')
console.log(boton)

const tagConCss = document.querySelector('.product-card p')
console.log(tagConCss)
const todosLosP = document.querySelectorAll('p')
console.log(todosLosP)

const arrayDeLosP = Array.from(tag)

console.log(arrayDeLosP)

let nombre = 'Nacho'

const arrayRandom = Array.from(nombre)
console.log(arrayRandom)

boton.addEventListener('click', (evento) => {
	body.children[0].children[0].innerHTML = '<p>Hola, soy un nuevo texto</p>'
})

// arrayDeLosP.forEach((el) => {
// 	console.log(el)
// })

const body = document.querySelector('body')

console.dir(body.children[0].innerText)

const elemento = body.children[0].children[0]

elemento.style.color = 'red'
