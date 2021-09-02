// console.log("Hola koder")
// // alert("Hola")

// //Ejercicio 1
// let number1 = prompt("Ingrese primer número")
// let number2 = prompt("Ingrese segundo número")
// // Transformando en números
// number1 =Number(number1);
// number2 = Number(number2)

// //Usando operadores aritmeticos
// let suma = number1 + number2
// let resta = number1 - number2
// let multiplicacion = number1 * number2
// let division = number1 / number2
// // Mostrando resultados
// console.log(suma)
// console.log(resta)
// console.log(multiplicacion)
// console.log(division)


// //Ejercicio 2

// let numberComparar1 = prompt("Ingrese primer número a comparar")
// let numberComparar2 = prompt("Ingrese segundo número a comparar")
// //Usando operadores relacionales con números
// let comparar = Number(numberComparar1)> Number(numberComparar2)

// // Mostrando resultados
// console.log(comparar)
// console.log()




// //Ejercicio 3
// let letraComparar1 = prompt("Ingrese primer letra a comparar")
// let letraComparar2 = prompt("Ingrese segunda letra a comparar")
// //Usando operadores relaciones con strings
// let letraComparar = letraComparar1< letraComparar2

// // Mostrando resultados
// console.log(letraComparar)
// console.log(`La comparacion respecto a la primer letra es ${letraComparar}`)



// let value = null;

// if(!value){
//     console.log(value)
// }

//Ejercicio7
// Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):

let name = prompt("¿Cual es tu nombre?")
let peso = prompt("¿Cual es tu peso? (kg)")

// Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

// Factor gravitacional luna
const factGravLuna = 0.1653;
let pesoLuna = peso * factGravLuna;

//Factor gravitacional Jupiter
const factGravJupiter = 2.5277;
let pesoJupiter = peso * factGravJupiter;

//Factor gravitacional MArte
const factGravMarte = 0.3784;
let pesoMarte = peso *factGravMarte;

console.log(`${name} tu peso en la luna es ${pesoLuna} kg`)
console.log(`${name} tu peso en Jupiter es ${pesoJupiter} kg`)
console.log(`${name} tu peso en Marte es ${pesoMarte} kg`)

