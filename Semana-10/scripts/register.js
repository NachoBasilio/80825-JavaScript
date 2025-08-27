const formularioRegister = document.getElementById('formulario-register')
const baseDeDatosDeUsuarios =
	JSON.parse(localStorage.getItem('usuariosRegistrados')) || []

formularioRegister.addEventListener('submit', (e) => {
	e.preventDefault()
	let user = e.target[0].value
	let pass = e.target[1].value

	baseDeDatosDeUsuarios.push({
		user,
		pass,
	})

	localStorage.setItem(
		'usuariosRegistrados',
		JSON.stringify(baseDeDatosDeUsuarios)
	)
	window.location.href = './login.html'
})
