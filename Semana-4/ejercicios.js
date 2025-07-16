const libros = [
	{ titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
	{ titulo: '1984', autor: 'George Orwell' },
	{ titulo: 'Rayuela', autor: 'Julio Cortázar' },
]

function buscadoraDeLibros() {
	let opcion = Number(
		prompt(
			'¿Que criterio quiere usar?\n 1- Nombre del libro\n 2- Autor del libro'
		)
	)

	if (opcion == 1) {
		buscarAPartirDeNombre()
	} else if (opcion == 2) {
		buscarAPartirDeAutor()
	} else {
		alert('Esa opcion no existe')
	}
}

//Tarea: Juntar estas funciones en una sola
function buscarAPartirDeNombre() {
	const arraySoloTitulos = []

	for (let i = 0; i < libros.length; i++) {
		arraySoloTitulos.push(libros[i].titulo)
	}

	let tituloABuscar = prompt('¿Que libro busca?')

	let index = arraySoloTitulos.indexOf(tituloABuscar)

	if (index == -1) {
		alert('No encontramos el libro que busca')
	} else {
		alert('El libro que usted busca esta escrito por: ' + libros[index].autor)
	}
}

function buscarAPartirDeAutor() {
	const arraySoloAutores = []

	for (let i = 0; i < libros.length; i++) {
		arraySoloAutores.push(libros[i].autor)
	}

	let autorABuscar = prompt('¿Que autor busca?')

	let index = arraySoloAutores.indexOf(autorABuscar)

	if (index == -1) {
		alert('No encontramos el autor que busca')
	} else {
		alert(
			'El autor que usted esta buscando, escribio este libro: ' +
				libros[index].titulo
		)
	}
}
//Fin de tarea

function agregarLibro() {
	let autorPrompt = prompt('¿Cual es el autor?')
	let tituloPrompt = prompt('¿Cual es el titulo?')

	if (
		autorPrompt == null ||
		tituloPrompt == null ||
		autorPrompt == '' ||
		tituloPrompt == ''
	) {
		alert('Tenes que poner las dos cosas...')
	} else {
		const objetoAux = {
			autor: autorPrompt,
			titulo: tituloPrompt,
		}

		libros.push(objetoAux)

		console.log(libros)
	}
}

function menu() {
	let bandera = true

	while (bandera) {
		let opcion = Number(
			prompt('¿Que quiere hacer?\n 1- Buscar un libro\n 2- Agregar un libro')
		)
		switch (opcion) {
			case 1:
				buscadoraDeLibros()
				break
			case 2:
				agregarLibro()
				break
			default:
				alert('No tenemos esa opcion')
				break
		}

		bandera = !confirm('¿Usted quiere irse? *Lo mira mal*')
	}
}

menu()
