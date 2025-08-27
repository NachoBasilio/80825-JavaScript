const botonIrLogin = document.getElementById('boton-ir-login')
const botonIrRegister = document.getElementById('boton-ir-registro')

const estaLogeado = JSON.parse(localStorage.getItem('estaLogeado')) || false

if (estaLogeado) {
	botonIrLogin.innerText = 'Entra a el sistema'
	botonIrRegister.remove()
}

botonIrLogin.addEventListener('click', () => {
	if (estaLogeado) {
		window.location.href = './pages/formulario-alumno.html'
	} else {
		window.location.href = './pages/login.html'
	}
})

botonIrRegister.addEventListener('click', () => {
	window.location.href = './pages/register.html'
})
