// Ejercicio ciclo for

// let str="kodemia"
// let lengthStr = str.length

// let result = ""

// for (let index = 0 ; index< lengthStr; index++ ){
//     if (index % 2 === 0){
//         result += str.charAt(index).toUpperCase()
//     }else{
//         result += str.charAt(index).toLowerCase()
//     }
// }

// console.log(result)


// Ejercicio 1- hecho:
/*

Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/


let word = prompt("Escribe una palabra:")

function firstLastMatch(word){
    let firstword = word.at(0)
    let lastWord = word.at(word.length-1)

    let result

    if (firstword === lastWord){
        result = "true"
    }else{
        result = "false"
    }
    return result
}
console.log(firstLastMatch(word))








/* Ejercicio 2-hecho:
    
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

// let number = prompt("Escriba un numero")
// let result
// for (index = 1; index<=10; index++){
//     result = `${index} x ${number} = ${index*number}`
//     console.log(result)
// }









/* Ejercicio 3-hecho:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero

Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero

1. Solicitar número y guardarlo
2. Definir variable resultado
3. Con ciclo for:
    3.1 Definir index de incicio = 1
    3.2 Definir el fin del for, cuando index sea <= al número dado solicitado
    3.3 Definir incremento del for en 1 unidad
4. Evaluar condición, si el index es par (modulo 2 = 0),
5. Imprimir index cuando cuando la condición es verdadera
*/

// let number = prompt("Escriba un numero entre 10 y 100")
// let result
// for (index = 1; index <= number; index++){
//     if (index % 2 === 0){
//         result = index
//         console.log(result)
//     }
    
// }



/*Ejercicio 4-hecho:

Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10

Algoritmo

1. Solicitar número y guardarlo
2. Definir variable resultado igual cero
3. Con ciclo for:
    3.1 Definir index de inicio de ciclo = 1
    3.2 Definir el fin del for, cuando index sea <= al largo del número
    3.3 Definir incremento del for en 1 unidad
    3.4 Ubicar index del número dado, sumarlo y asignarlo  en result
    
5. Imprimir result con con console.log

*/
// let number = prompt("Escriba un numero de varias cifras")
// let numberString = number.toString()
// let result = 0
// for (index = 0; index < numberString.length; index++){
//         result += Number(numberString.charAt(index))
     
//     }
//     console.log(result)
    




/*Ejercicio 5-hecho:

Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

// let number = prompt("Escriba *")
// let result =""
// for (index = 1; index<=10; index++){
//     result += number
//     console.log(result)
// }


/*Ejercicio 6-hecho;
    
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168

1. Definir variable resultado = 0
3. Con ciclo for:
    3.1 Definir index de inicio = 1
    3.2 Definir el fin del for, cuando index sea <= 100
    3.3 Definir incremento del for en 1 unidad
    3.4. Evaluar condición, si el index es par (modulo 3 = 0) o (modulo 5 = 0),
        Si es verdadero, sumar a result

5. Imprimir result
*/

// let result = 0
// for (index = 1; index <= 100; index++){
//     if (index % 3 === 0 || index % 5 === 0 ){
//         result += index
//         console.log(result)
        
//     }
    
// }




/*Ejercicio 7-hecho:



Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders

1. Solicitar frase y guardarla
2. Definir variable de largo de frase
2. Definir variable resultado igual a string vacio
3. Con ciclo for:
    3.1 Definir index de inicio = 0
    3.2 Definir el fin del for, cuando index sea <= largo de frase
    3.3 Definir incremento del for en 1 unidad
    3.4. Evaluar condición, si letra de frase = " ", suma una unidad al indice,
        sino, suma/ concatena la letra a result
4. Imprime result
    
*/

// let paragraph = prompt("Escriba frase")
// let paragraphLength = paragraph.length
// let result = ""
// for (index = 0; index < paragraph.length; index++){
//     if(paragraph[index] === " "){
//         result += ""
//     }else if (paragraph[index -1 ] === " ") {
//         result += paragraph[index].toLocaleUpperCase()
//     }else{
//         result += paragraph[index].toLowerCase()
//     }
//     }
//     console.log(result)
    


/*Ejercicio 8-hecho:

Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/

// function askNumbers(quantity){
//     let numbers =  []
//     for (let index = 1; index <= quantity; index ++){
//         let number = prompt(`Escribe el numero ${index}`)
//         numbers.push(Number(number))
//     }
//     let sliceNumbers = numbers.slice(-5)

//     let addSliceNumbers = sliceNumbers.reduce((a,b)=>a+b)
//     return addSliceNumbers
// }

// console.log(askNumbers(10))