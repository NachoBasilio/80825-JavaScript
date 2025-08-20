const carritoBoton = document.getElementById('cart-btn')
const carritoFisico = document.getElementById('cart')
const cerrarCarrito = document.getElementById('close-cart')
const contenedorCards = document.getElementById('contenedor-cards')
const carritoFisicoInterno = document.getElementById('carrito-fisico-interno')
const total = document.getElementById('total')
const terminarCompra = document.getElementById('terminar-compra')

const productos = []
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

carritoBoton.addEventListener('click', () => {
	carritoFisico.classList.toggle('show')
})

cerrarCarrito.addEventListener('click', () => {
	carritoFisico.classList.toggle('show')
})

const calculadoraTotal = () => {
	let total = carrito.reduce((acc, el) => {
		return (acc += el.precio * el.cantidad)
	}, 0)

	return total
}

const agregadoraEventoMinus = () => {
	const botonesQueRestan = document.getElementsByClassName(
		'bajar-uno-al-producto'
	)
	const arrayBotonQueRestan = Array.from(botonesQueRestan)

	arrayBotonQueRestan.forEach((boton) =>
		boton.addEventListener('click', (evento) => {
			let id = parseInt(evento.target.parentElement.id)

			let producto = carrito.find((el) => el.id == id)

			if (producto.cantidad == 1) {
				let index = carrito.findIndex((el) => el.id == id)
				carrito.splice(index, 1)
			} else {
				producto.cantidad--
			}
			agregadoraACarrito()
		})
	)
}

const agregadoraACarrito = () => {
	carritoFisicoInterno.innerHTML = ''
	carrito.forEach((producto) => {
		carritoFisicoInterno.innerHTML += `<div id="${producto.id}carrito">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
			<p>${producto.cantidad}</p>
			<div class="bajar-uno-al-producto"> - </div>
        </div>`
	})

	let calculoTotal = calculadoraTotal()

	agregadoraEventoMinus()

	localStorage.setItem('carrito', JSON.stringify(carrito))

	total.innerHTML = `<p class="total">Total: ${calculoTotal}</p>`
}

const agregadoraDeEventoDeBoton = () => {
	const botones = document.querySelectorAll('.boton-agregar')
	const arrayBoton = Array.from(botones)

	arrayBoton.forEach((boton) => {
		boton.addEventListener('click', (event) => {
			let id = event.target.parentNode.id

			let producto = productos.find((el) => el.id == id)

			let existe = carrito.some((elemnto) => elemnto.id == producto.id)

			if (existe) {
				let index = carrito.findIndex((el) => el.id == producto.id)

				carrito[index].cantidad++
			} else {
				carrito.push({ ...producto, cantidad: 1 })
			}

			agregadoraACarrito()
		})
	})
}

const renderizadoraDeCards = () => {
	productos.forEach((producto) => {
		contenedorCards.innerHTML += `<section class="product-card" id=${producto.id}>
				<img
					src=${producto.imagen}
					alt=${producto.nombre}
				/>
				<h2>${producto.nombre}</h2>
				<p>${producto.descripcion}</p>
				<span class="price">$${producto.precio}</span>
				<button class='boton-agregar'>Agregar al carrito</button>
			</section>`
	})
	agregadoraDeEventoDeBoton()
}

terminarCompra.addEventListener('click', () => {
	carrito = []
	agregadoraACarrito()
})

document.addEventListener('DOMContentLoaded', async () => {
	agregadoraACarrito()

	try {
		let res = await fetch('./datos.json')
		let data = await res.json()

		data.forEach((data) => {
			productos.push(data)
		})
	} catch (error) {
		console.error(error)
	}

	renderizadoraDeCards()
})
