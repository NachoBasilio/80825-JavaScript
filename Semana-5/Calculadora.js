class Calculadora {
	constructor(pi) {
		this.pi = pi
		this.e = 2.71
	}

	suma(a, b) {
		console.log(a + b)
	}
}

const Calculadora1 = new Calculadora(3.14)
const Calculadora2 = new Calculadora(3.1416)

console.log(Calculadora1.pi)
console.log(Calculadora2.pi)

const Calculadora3 = {
	pi: 3.14,
	e: 2.7,
}

console.log(Calculadora1)
console.log(Calculadora2)
console.log(Calculadora3)

Calculadora2.numeroFavorito = 6

console.log(Calculadora2)

Calculadora2.suma(4, 5)
