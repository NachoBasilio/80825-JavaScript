let bandera = true
let total = 0
let carritoProductos = ''

let listaDeProductos =
	'Los productos que tenemos son estos:\n1 - coca-cola: 3$\n 2 - agua: 1$ '

while (bandera) {
	let opciones = Number(
		prompt(
			'Bienvenido a la tienda perrito con chaucha:\n 1- ver productos\n 2- comprar\n 3- ver total'
		)
	)

	switch (opciones) {
		case 1:
			alert(listaDeProductos)
			break
		case 2:
			let producto = Number(prompt('Ingrese el numero del producto:'))
			if (producto == 1) {
				total += 3
				carritoProductos += 'coca-cola\n'
				alert('Agregaste una rica coca-cola')
			} else if (producto == 2) {
				total += 1
				carritoProductos += 'agua\n'
				alert('Agregaste un MEGA agua, aguante le agua')
			} else {
				alert('No tenemos ese producto')
			}
			break
		case 3:
			if (total == 0) {
				alert('No tenes nada en el carrito')
			} else {
				alert('Tu total es de: ' + total)
				alert('Estos son tus producots:\n ' + carritoProductos)
			}
			break
		default:
			alert('Esta no es una opcion valida')
			break
	}

	bandera = confirm('¿Quiere seguir comprando?')
}
