const formularioRegistroUsuario = document.getElementById(
	'formulario-registro-usuario'
)
const contenedorInputs = document.getElementById('contenedor-inputs')

const botonMas = document.getElementById('boton-mas')

const botonVerAlumnos = document.getElementById('ver-alumnos')

let dbUsuarios = []

botonVerAlumnos.addEventListener('click', () => {
	window.location.href = '../pages/mostrador-alumnos.html'
})

formularioRegistroUsuario.addEventListener('submit', (e) => {
	e.preventDefault()
	let nombre = e.target[0].value
	let apellido = e.target[1].value
	let dni = e.target[2].value
	let materias = []

	for (let index = 3; index < e.target.length - 2; index += 2) {
		let materia = e.target[index].value
		let nota = e.target[index + 1].value
		materias.push({
			nombre: materia,
			nota,
		})
	}

	dbUsuarios.push({
		nombre,
		apellido,
		dni,
		materias,
	})

	Swal.fire('Se agrego un alumno')
	localStorage.setItem('baseDatosUsuaros', JSON.stringify(dbUsuarios))

	for (let index = 0; index < e.target.length - 1; index++) {
		e.target[index].value = ''
	}
})

botonMas.addEventListener('click', (e) => {
	e.preventDefault()
	contenedorInputs.innerHTML += `
        			<input type="text" placeholder="materia" />
					<input type="text" placeholder="nota" />
    `
})

document.addEventListener('DOMContentLoaded', async () => {
	const res = await fetch('../alumnos.json')
	const data = await res.json()

	dbUsuarios =
		JSON.parse(localStorage.getItem('baseDatosUsuaros')) || data.alumnos

	localStorage.setItem('baseDatosUsuaros', JSON.stringify(dbUsuarios))
})
