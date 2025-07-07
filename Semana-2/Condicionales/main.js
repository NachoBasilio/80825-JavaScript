// Condicionales

// const edad = parseInt(prompt("Por favor ingrese su edad"));

// const edad = Number(prompt("Por favor ingrese su edad")); // devuelve Nan si falla

// if(isNaN(edad)){  // --> "Esto no es numero" "lo que está dentro del paréntesis no es un numero"
//     alert("Esto no es un número");
// } else {
//     if (edad === 18) {
//         alert("Puede pasar, estás justo pero podés pasar");
//     } else if(edad >= 18){
//         alert("podés pasar");
//     } else {
//         alert('no puede pasar');
//     }
// }    



// simulando pass y usuario registrado.
const usuario = "admin";
const pass = "admin1234";


// // Le pedimos al usuario las credenciales de ingreso
// const usuarioIngresado = prompt("ingrese su nombre de usuario"); // string
// const passIngresada = prompt("ingrese su password"); // string

// // Evaluando
// // Necesito que las 2 condiciones sean verdaderas.
// // AND: Ambas condiciones TIENEN que ser verdaderas.
// if(usuarioIngresado === usuario && passIngresada === pass){
//     alert("bienvenido/a");
// } else{
//     alert("lo siento, no podés ingresar");
// }

// for(let i = 0; i < 3; i++){ // EL BUCLE REPITE CÓDIGO
//     // Le pedimos al usuario las credenciales de ingreso
//     const usuarioIngresado = prompt("ingrese su nombre de usuario"); // string
//     const passIngresada = prompt("ingrese su password"); // string

//     if(usuarioIngresado === usuario && passIngresada === pass){
//         alert("bienvenido/a");
//         break; // palabra reservada que permite ROMPER el for.
//     } else{
//         alert(`lo siento, no podés ingresar te quedan ${2-i} intentos`);

//     }
// }


alert("Welcome to PERRITO CON CHAUCHA STORE");
const opcion = prompt("Ingrese la opcion deseada. 1) mostrar/comprar productos, 2) ver carrito, 3) programar envío");

switch(opcion){
    case "1":
        alert("mostrando productos");
        break;
    case "2":
        alert("mostrando carrito");
        break;
    case "3":
        alert("programando envío");
        break;
    default:
        alert("no entiendo lo que me decís");
        break;
}

let numero = Number(prompt("ingresá un número"));

// BUCLE "MIENTRAS" mientras la condición se cumpla como verdadera.
while(isNaN(numero)){ // necesito que SEA un numero, si no lo es vuelvo a pedir el DATO.
    numero = Number(prompt("ingresá un número"));
}



//-------------------------------------//

// EJERCICIO - PEDIR UN NUMERO AL USUARIO E INFORMAR SI ES PAR O IMPAR.
// Pedir un numero
// validarlo
// evaluar si es par o impar - n % 2 = 0; 
// if (n % 2 = 0){ alert ('es par')} else { alert('es impar')}

const numerito = Number(prompt('ingrese un numero, evaluaré si es par'));

if(numerito % 2 === 0){
    alert('el numero es par');
} else{
    alert('el numero es impar');
}



