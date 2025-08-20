const URL = 'https://pokeapi.co/api/v2/pokemon/'
const formulario = document.getElementById('formulario')
const contenedor = document.getElementById('contenedor')
//Promesas

function pintarElPokemonDeseado(numeroONombre) {
	fetch(URL + numeroONombre)
		.then((res) => {
			console.log(res)
			return res.json()
		})
		.then((data) => {
			console.log(data)
			let img = document.createElement('img')
			img.src = data.sprites.front_default

			img.className = 'pokemon-imagen'
			contenedor.appendChild(img)
		})
		.catch((error) => {
			console.error(error)
		})
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault()
	let nombreONumeroPokemon = e.target[0].value

	pintarElPokemonDeseado(nombreONumeroPokemon)

	e.target[0].value = ''
})
