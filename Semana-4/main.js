const nombres = ['Nacho', 'Isaac', 'Seba', 'Juan', 'Martina']

const nombres2 = ['Mauro', 'Jorge']

const edades = [2, 5, 23, 12, 4, 32, 15]

console.log(nombres)

for (let index = 0; index < nombres.length; index++) {
	let element = nombres[index]
	console.log(element)
}

nombres.push('Geronimo')

nombres.unshift('Rengar')

let existeRengar = nombres.includes('Rengar')

console.log(existeRengar)

console.log(nombres)

const descartado = nombres.pop()

console.log(descartado)

console.log(nombres)

nombres.splice(3, 2, 'Valentina', 'Rengar') // Desde donde (Lo cuenta), Cuantos borro (Puedo poner 0), "Que lo remplaza"

nombres.shift()

console.log(nombres)

const nombresSupremo = nombres.concat(nombres2)

console.log(nombresSupremo)

nombresSupremo.sort().reverse()

console.log(nombresSupremo)

console.log(edades)

edades.sort()

console.log(edades)

let index = nombresSupremo.indexOf('Nacho')

console.log(index)

nombresSupremo.splice(index, 1)

console.log(nombresSupremo)

const auto = {
	puertas: 3,
	ruedas: 4,
	color: 'rojo',
	modelo: 'Gol',
}

console.log(auto)

console.log(auto.puertas)

const autos = [
	{
		puertas: 3,
		ruedas: 4,
		color: 'rojo',
		modelo: 'Gol',
	},
	{
		puertas: 5,
		ruedas: 4,
		color: 'azul',
		modelo: 'Focus',
	},
	{
		puertas: 3,
		ruedas: 4,
		color: 'blanco',
		modelo: 'Clio',
	},
	{
		puertas: 4,
		ruedas: 4,
		color: 'negro',
		modelo: 'Civic',
	},
	{
		puertas: 2,
		ruedas: 4,
		color: 'amarillo',
		modelo: 'Camaro',
	},
]
