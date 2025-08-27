const dbUsuarios = JSON.parse(localStorage.getItem('baseDatosUsuaros')) || []

const contenedoAlumnos = document.getElementById('contenedor-alumnos')

dbUsuarios.forEach((element) => {
	contenedoAlumnos.innerHTML += `
    		<div class="alumno">
				<p class="nombre-alumno">${element.nombre}</p>
				<p class="apellido">${element.apellido}</p>
				<p class="dni">${element.dni}</p>
				<div class="materias">

					<div class="materia">
                    ${element.materias.reduce((acc, el) => {
											return (acc += `
                        <p>${el.nombre}</p>
						<p>${el.nota}</p>
                    `)
										}, '')}

					</div>
				</div>
			</div>
    `
})

let stringMaterias
dbUsuarios.forEach((el) => {
	stringMaterias = el.materias.reduce((acc, el) => {
		return (acc += `
                        <p>${el.nombre}</p>
						<p>${el.nota}</p>
                    `)
	}, '')
	console.log(stringMaterias)
})
