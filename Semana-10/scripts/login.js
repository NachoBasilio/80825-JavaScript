const formularioLogin = document.getElementById('formulario-login')
const baseDeDatosDeUsuarios =
	JSON.parse(localStorage.getItem('usuariosRegistrados')) || []

formularioLogin.addEventListener('submit', (e) => {
	e.preventDefault()
	let user = e.target[0].value
	let pass = e.target[1].value
	let estaLogeado = baseDeDatosDeUsuarios.some((usuario) => {
		return usuario.pass == pass && usuario.user == user
	})

	localStorage.setItem('estaLogeado', JSON.stringify(estaLogeado))

	if (estaLogeado) {
		window.location.href = '../pages/formulario-alumno.html'
	}
})
