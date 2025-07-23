// const libros = [
// 	{ titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
// 	{ titulo: '1984', autor: 'George Orwell' },
// 	{ titulo: 'Rayuela', autor: 'Julio Cortázar' },
// ]

// const libros = []

class Libro {
	constructor(titulo, autor) {
		this.titulo = titulo
		this.autor = autor
	}
}

// libros.push(new Libro('Cien años de soledad', 'Gabriel García Márquez'))
// libros.push(new Libro('1984', 'George Orwell'))
// libros.push(new Libro('Rayuela', 'Julio Cortázar'))

class Libreria {
	constructor() {
		this.libros = JSON.parse(localStorage.getItem('libros')) || []
	}

	buscadoraDeLibros() {
		let opcion = Number(
			prompt(
				'¿Que criterio quiere usar?\n 1- Nombre del libro\n 2- Autor del libro'
			)
		)

		if (opcion == 1) {
			this.buscarAPartirDeNombre()
		} else if (opcion == 2) {
			this.buscarAPartirDeAutor()
		} else {
			alert('Esa opcion no existe')
		}
	}

	buscarAPartirDeNombre() {
		const arraySoloTitulos = []

		for (let i = 0; i < this.libros.length; i++) {
			arraySoloTitulos.push(this.libros[i].titulo)
		}

		let tituloABuscar = prompt('¿Que libro busca?')

		let index = arraySoloTitulos.indexOf(tituloABuscar)

		if (index == -1) {
			alert('No encontramos el libro que busca')
		} else {
			alert(
				'El libro que usted busca esta escrito por: ' + this.libros[index].autor
			)
		}
	}

	buscarAPartirDeAutor() {
		const arraySoloAutores = []

		for (let i = 0; i < this.libros.length; i++) {
			arraySoloAutores.push(this.libros[i].autor)
		}

		let autorABuscar = prompt('¿Que autor busca?')

		let index = arraySoloAutores.indexOf(autorABuscar)

		if (index == -1) {
			alert('No encontramos el autor que busca')
		} else {
			alert(
				'El autor que usted esta buscando, escribio este libro: ' +
					this.libros[index].titulo
			)
		}
	}

	agregarLibro() {
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
			const objetoAux = new Libro(tituloPrompt, autorPrompt)

			this.libros.push(objetoAux)

			localStorage.setItem('libros', JSON.stringify(this.libros))
		}
	}
}

const LibreriaObjeto = new Libreria()

function menu() {
	let bandera = true

	while (bandera) {
		let opcion = Number(
			prompt('¿Que quiere hacer?\n 1- Buscar un libro\n 2- Agregar un libro')
		)
		switch (opcion) {
			case 1:
				LibreriaObjeto.buscadoraDeLibros()
				break
			case 2:
				LibreriaObjeto.agregarLibro()
				break
			default:
				alert('No tenemos esa opcion')
				break
		}

		bandera = !confirm('¿Usted quiere irse? *Lo mira mal*')
	}
}

menu()
