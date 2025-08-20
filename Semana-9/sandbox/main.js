const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
	Swal.fire({
		title: 'Soy un alerta mejorada con un objeto de configuracion',
		// text: 'Si, re',
		icon: 'info',
		timer: 1500,
		timerProgressBar: true,
		toast: true,
		position: 'bottom-end',
		showConfirmButton: false,
		// background: '#f00',
	})
})
