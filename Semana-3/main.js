const USER = 'admin'
const PASS = '12345'

let total = 0
let productos = ''

// var edad = 3
// var URL = 'www.google.com'

// {
// 	var edad = 5
// 	console.log(edad)
// }

// console.log(edad)

// for (var index = 0; index < 10; index++) {
// 	console.log(index)
// }

// for (; index < 10; index++) {
// 	console.log(index)
// }

function login(usuario, contraseña) {
	if (usuario === USER && contraseña === PASS) {
		return true
	} else {
		return false
	}
}

function inicioSesionWhile() {
	let bandera = true

	while (bandera) {
		let usuario = prompt('Dame tu nombre de usuario')
		let contraseña = prompt('Dame tu contraseña')

		let intento = login(usuario, contraseña)

		if (intento) {
			bandera = false
		}
	}
}

function inicioSesionFor() {
	let intento = false
	for (let i = 0; i < 3; i++) {
		let usuario = prompt('Dame tu nombre de usuario')
		let contraseña = prompt('Dame tu contraseña')

		intento = login(usuario, contraseña)

		if (intento) {
			break
		}
	}
	if (!intento) {
		alert('No pudiste entrar, ahi va la policia')
	}
	return intento
}

function mostrarProducto() {
	let productos =
		'Nuestro productos son:\n 1- agua 1$\n 2- te 2$\n 3- mate 10$\n 4- cafe 5$'
	alert(productos)
}

function comprar(id) {
	switch (id) {
		case 1:
			total += 1
			productos += 'agua\n'
			alert('Usted sumo un agua a su carrito')
			break
		case 2:
			total += 2
			productos += 'te\n'
			alert('Usted sumo un te a su carrito')
			break
		case 3:
			total += 10
			productos += 'mate\n'
			alert('Usted sumo un mate a su carrito')
			break
		case 4:
			total += 5
			productos += 'cafe\n'
			alert('Usted sumo un cafe a su carrito')
			break
		default:
			alert('No tenemos ese producto')
			break
	}
}

const limpiarCarrito = () => {
	total = 0
	productos = ''
}

function mostrarCarrito() {
	if (total == 0) {
		alert('Usted no tiene NADA en el carrito')
	} else {
		alert(
			'Los productos que usted compro son:\n' +
				productos +
				'Su total es de ' +
				total +
				'$'
		)

		let siQuiereTerminarLaCompra = confirm('¿Usted quiere terminar la compra?')
		if (siQuiereTerminarLaCompra) {
			alert('Disfrute su compra')
			limpiarCarrito()
		}
	}
}

function menu() {
	let bandera = true

	while (bandera) {
		let opciones = Number(
			prompt(
				'¡Welcome to Perrito con chaucha store! Usted puede hacer lo siguiente:\n 1- ver productos\n 2- comprar con ID\n 3- Terminar compra'
			)
		)

		switch (opciones) {
			case 1:
				mostrarProducto()
				break
			case 2:
				let idProducto = Number(
					prompt(
						'Nuestro productos son:\n 1- agua 1$\n 2- te 2$\n 3- mate 10$\n 4- cafe 5$\n\n\n ¿Que producto queres comprar?'
					)
				)
				comprar(idProducto)
				break
			case 3:
				mostrarCarrito()
				break
			default:
				break
		}

		bandera = confirm('¿Usted quiere seguir comprando?')
	}
}

let entroEnElMenu = inicioSesionFor()

if (entroEnElMenu) {
	menu()
} else {
	alert('No entraste al menu')
}
