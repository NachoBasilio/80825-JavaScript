// 3. **Gestor de Calificaciones**
//     - Clase Alumno con array de notas.
//     - Método para calcular promedio.
//     - Guarda cada alumno con sus notas en localStorage.

class Nota {
	constructor(materia, valor) {
		this.materia = materia
		this.valor = valor
	}
}

class Alumno {
	constructor(nombre, apellido, dni) {
		this.nombre = nombre
		this.apellido = apellido
		this.dni = dni
		this.notas = []
		this.promedio = 0
	}

	agregarUnaNota(materia, valorNota) {
		let nota = new Nota(materia, valorNota)

		this.notas.push(nota)
		this.calculadoraDePromedio()
	}

	calculadoraDePromedio() {
		let sumatoria = 0
		for (let i = 0; i < this.notas.length; i++) {
			sumatoria += this.notas[i].valor
		}
		this.promedio = sumatoria / this.notas.length
	}
}

const Alumnos = []
const valorLocalStorage = JSON.parse(localStorage.getItem('alumnos')) || []

if (valorLocalStorage.length > 0) {
	for (let i = 0; i < valorLocalStorage.length; i++) {
		const alumnoSinFormatear = valorLocalStorage[i]

		const alumnoAux = new Alumno(
			alumnoSinFormatear.nombre,
			alumnoSinFormatear.apellido,
			alumnoSinFormatear.dni
		)

		for (let i = 0; i < alumnoSinFormatear.notas.length; i++) {
			const notaSinFormatear = alumnoSinFormatear.notas[i]

			alumnoAux.agregarUnaNota(
				notaSinFormatear.materia,
				Number(notaSinFormatear.valor)
			)
		}

		Alumnos.push(alumnoAux)
	}
}

const Nacho = new Alumno('Nacho', 'Basilio', '321312321')
const David = new Alumno('David', 'Resca', '321312312')

Alumnos.push(Nacho)
Alumnos.push(David)

Nacho.agregarUnaNota('Matematicas', 4)
David.agregarUnaNota('Matematicas', 6)

localStorage.setItem('alumnos', JSON.stringify(Alumnos))
