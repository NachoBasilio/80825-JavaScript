const productosAnime = [
	{
		nombre: 'Figura de acción - Goku Super Saiyan',
		precio: 45.99,
		descripcion:
			'Figura articulada de Goku en su transformación Super Saiyan. Detalles precisos y base incluida.',
		id: 1,
	},
	{
		nombre: 'Camiseta - Akatsuki (Naruto)',
		precio: 22.5,
		descripcion:
			'Camiseta negra unisex con el icónico logo de la organización Akatsuki. Algodón 100%.',
		id: 2,
	},
	{
		nombre: 'Taza - One Piece (Luffy Wanted)',
		precio: 12.99,
		descripcion:
			"Taza de cerámica con el cartel de 'Se Busca' de Monkey D. Luffy. Apta para microondas.",
		id: 3,
	},
	{
		nombre: 'Póster - Attack on Titan (Eren vs Titan)',
		precio: 8.0,
		descripcion:
			'Póster tamaño A2 con escena épica de Eren enfrentando a un titán. Papel satinado de alta calidad.',
		id: 4,
	},
	{
		nombre: 'Cuaderno - Death Note',
		precio: 14.75,
		descripcion:
			'Réplica del cuaderno Death Note. Incluye páginas con reglas escritas e ilustraciones de Ryuk.',
		id: 5,
	},
]

const Carrito = []

const comprarPorId = (id) => {
	const producto = productosAnime.find((el) => el.id == id)

	if (producto) {
		const productoNuevo = { ...producto }

		// const productoNuevoTradicional = {
		//     nombre: producto.nombre,
		//     precio: producto.precio,
		//     descripcion: producto.descripcion,
		//     id: producto.id
		// }

		Carrito.push(productoNuevo)
	} else {
		alert('No tenemos un producto con ese ID')
	}
}

const calcularTotal = (lista) => {
	let total = lista.reduce((acc, producto) => {
		return (acc += producto.precio)
	}, 0)
	return total.toFixed(2)
}

const mostradoraDeCarrito = () => {
	if (Carrito.length == 0) {
		alert('No tenes nada en el carrito')
		return
	}

	let mensaje = Carrito.reduce((acc, producto) => {
		return (acc += '\n - ' + producto.nombre + ' - $' + producto.precio)
	}, 'El carrito es el siguiente: \n')

	let total = calcularTotal(Carrito)

	mensaje += '\n\n\n\nEl total es de: ' + total

	alert(mensaje)
}

const validaSiEsUnNumero = (mensaje) => {
	let supuestoNumero = Number(prompt(mensaje))

	while (isNaN(supuestoNumero)) {
		supuestoNumero = Number(
			prompt('Te pedi un numero, no me hagas llamar a la policia')
		)
	}

	return supuestoNumero
}

const mostradoraDeProductos = () => {
	let mensaje = productosAnime.reduce((acc, producto) => {
		return (acc +=
			'\n - ' +
			producto.id +
			' - ' +
			producto.nombre +
			' - $' +
			producto.precio)
	}, 'Nuestros productos son los siguientes: \n')

	alert(mensaje)
}

const terminarCompra = (listaProductos) => {
	let total = calcularTotal(listaProductos)
	alert('El total es de ' + total)

	//Tarea: tener medios de pago.
	let confirmacion = confirm('¿Quiere terminar la compra?')
	return confirmacion
}

const terminarCompraConCodigoMagico = (codigo) => {
	if (codigo == 'Chauchita') {
		let carritoConDescuento = Carrito.map((el) => {
			return { ...el, precio: el.precio * 0.75 }
		})
		return terminarCompra(carritoConDescuento)
	} else {
		alert('Ese no era el codigo')
		return terminarCompra(Carrito)
	}
}

const core = () => {
	let bandera = true
	while (bandera) {
		let opciones = validaSiEsUnNumero(
			'Bienvenido a Perrito con Chaucha Anime store ¿Que necesita?\n 1- Ver productos\n 2- Comprar a partir de ID\n 3- Mostrar carrito \n 4- Terminar compra con "Codigo magico"\n 5- Terminar compra\n 0- Salir'
		)

		console.log(opciones)

		switch (opciones) {
			case 0:
				bandera = false
				break
			case 1:
				mostradoraDeProductos()
				break
			case 2:
				let idCompra = validaSiEsUnNumero('El id del producto: ')
				comprarPorId(idCompra)
				break
			case 3:
				mostradoraDeCarrito()
				break
			case 4:
				let codigo = prompt('Cual es el codigo magico?')
				let terminarCompraMagica = terminarCompraConCodigoMagico(codigo)
				if (terminarCompraMagica) {
					alert('Hasta mañana')
					bandera = false
				} else {
					alert('Puede seguir comprando')
				}
				break
			case 5:
				let terminarCompraRespuesta = terminarCompra(Carrito)
				if (terminarCompraRespuesta) {
					alert('Hasta mañana')
					bandera = false
				} else {
					alert('Puede seguir comprando')
				}
				break
			default:
				alert('Esa opcion no la tenemos')
				break
		}
	}
}

core()

let nombre1 = 'NACHO'

let nombre2 = nombre1
