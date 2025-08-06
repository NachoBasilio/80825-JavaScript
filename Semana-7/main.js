const carritoBoton = document.getElementById('cart-btn')
const carritoFisico = document.getElementById('cart')
const cerrarCarrito = document.getElementById('close-cart')
const contenedorCards = document.getElementById('contenedor-cards')
const carritoFisicoInterno = document.getElementById('carrito-fisico-interno')
const total = document.getElementById('total')
const terminarCompra = document.getElementById('terminar-compra')

let carrito = []

carritoBoton.addEventListener('click', () => {
	carritoFisico.classList.toggle('show')
})

cerrarCarrito.addEventListener('click', () => {
	carritoFisico.classList.toggle('show')
})

const productos = [
	{
		id: 1,
		nombre: 'Ratón Inalámbrico',
		descripcion: 'Ratón USB inalámbrico con sensor óptico de alta precisión.',
		precio: 15000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_840419-MLA80340597681_102024-O.webp',
	},
	{
		id: 2,
		nombre: 'Teclado Mecánico RGB',
		descripcion:
			'Teclado mecánico con retroiluminación RGB y switches táctiles.',
		precio: 45000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_602974-MLA79990137195_102024-O.webp',
	},
	{
		id: 3,
		nombre: 'Auriculares Gaming',
		descripcion: 'Auriculares con micrófono y sonido envolvente 7.1.',
		precio: 38000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_2X_653419-MLA81790096198_012025-T.webp',
	},
	{
		id: 4,
		nombre: 'Monitor 24" Full HD',
		descripcion: 'Monitor LED de 24 pulgadas con resolución 1920×1080 y 75 Hz.',
		precio: 85000,
		imagen:
			'https://www.lg.com/ar/images/monitores/md05985257/gallery/medium01.jpg',
	},
	{
		id: 5,
		nombre: 'Disco SSD 1TB',
		descripcion:
			'Unidad de estado sólido SATA III de 1TB, alta velocidad de lectura.',
		precio: 120000,
		imagen:
			'https://compucordoba.com.ar/img/Public/1078-producto-d-nq-np-699067-mla31583397158-072019-o1-614.jpg',
	},
	{
		id: 6,
		nombre: 'Memoria RAM 16GB DDR4',
		descripcion: 'Kit de 2×8GB DDR4 3200 MHz para rendimiento multitarea.',
		precio: 75000,
		imagen:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGFE7savsAkDiiQm1uV3ishvkBRQsHb1zVQ&s',
	},
	{
		id: 7,
		nombre: 'Fuente de Poder 650W',
		descripcion: 'PSU 650W 80+ Bronze, modular semi–modular.',
		precio: 64000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_874550-MLU75496009697_032024-O.webp',
	},
	{
		id: 8,
		nombre: 'Placa de Video GTX 1660',
		descripcion: 'Tarjeta gráfica NVIDIA GeForce GTX 1660 6GB GDDR5.',
		precio: 220000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_911184-MLA48381979172_112021-O.webp',
	},
	{
		id: 9,
		nombre: 'Gabinete Mid-Tower',
		descripcion: 'Case ATX con ventilación frontal y ventana lateral.',
		precio: 36000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_2X_848337-MLU71656964248_092023-F.webp',
	},
	{
		id: 10,
		nombre: 'Refrigeración Líquida CPU',
		descripcion:
			'Sistema de refrigeración líquida para CPU con radiador de 240 mm.',
		precio: 98000,
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_915738-MLU74426578602_022024-O.webp',
	},
	{
		id: 11,
		nombre: 'Muñeco Pikachu',
		descripcion: 'Es un muñeco de pikachu',
		precio: 980000,
		imagen:
			'https://acdn-us.mitiendanube.com/stores/001/050/433/products/pikachu-pequeno11-f199f4e25a075b5d0616362052923588-1024-1024.jpg',
	},
]

const calculadoraTotal = () => {
	let total = carrito.reduce((acc, el) => {
		return (acc += el.precio)
	}, 0)

	return total
}

const agregadoraACarrito = () => {
	carritoFisicoInterno.innerHTML = ''
	carrito.forEach((producto) => {
		carritoFisicoInterno.innerHTML += `<div>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        </div>`
	})

	let calculoTotal = calculadoraTotal()

	total.innerHTML = `<p class="total">Total: ${calculoTotal}</p>`
}

const agregadoraDeEventoDeBoton = () => {
	const botones = document.querySelectorAll('.boton-agregar')
	const arrayBoton = Array.from(botones)

	arrayBoton.forEach((boton) => {
		boton.addEventListener('click', (event) => {
			let id = event.target.parentNode.id

			let producto = productos.find((el) => el.id == id)

			carrito.push({ ...producto })
			agregadoraACarrito()
		})
	})
}

const renderizadoraDeCards = () => {
	productos.forEach((producto) => {
		contenedorCards.innerHTML += `<section class="product-card" id=${producto.id}>
				<img
					src=${producto.imagen}
					alt=${producto.nombre}
				/>
				<h2>${producto.nombre}</h2>
				<p>${producto.descripcion}</p>
				<span class="price">$${producto.precio}</span>
				<button class='boton-agregar'>Agregar al carrito</button>
			</section>`
	})
	agregadoraDeEventoDeBoton()
}

terminarCompra.addEventListener('click', () => {
	carrito = []
	agregadoraACarrito()
})

document.addEventListener('DOMContentLoaded', () => {
	renderizadoraDeCards()
	//ACA NO VA TODA LA LOGICA...
})
