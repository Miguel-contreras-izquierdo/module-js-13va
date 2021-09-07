// // Ejercicio 1
// // Solicitar al usuario nombre y apellido

// function nameMayuscMinusc(nombre, apellido){

//     let nombreMinusc = nombre.toLowerCase()
//     let apellidoMayusc = apellido.toUpperCase()
//     let resultado = `${nombreMinusc} ${apellidoMayusc}`
//     return resultado
// }

// let nombre = prompt("Escribe tu nombre")
// let apellido = prompt("Escribe tu apellido")
// // / Regresar en una sola cadena donde el nombre sean minusculas y apellidos sean mayusculas
// console.log(nameMayuscMinusc(nombre, apellido))


// ejercicio2
// SOlicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre

// let nombreCompleto = prompt("Escribe tu nombre completo")

// let respuesta = nombreCompleto.length

// console.log(`Tu nombre contiene ${respuesta} caracteres`)

// Ejercicio 3:
    // Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
// let nombreCompleto = prompt("Escribe tu nombre completo")

// let countA = (nombreCompleto.match(/a/g) || []).length;
// let countE = (nombreCompleto.match(/e/g) || []).length;
// let countI = (nombreCompleto.match(/i/g) || []).length;
// let countO = (nombreCompleto.match(/o/g) || []).length;
// let countU = (nombreCompleto.match(/u/g) || []).length;

// let countVocals = countA + countE + countI + countO + countU
// console.log(`Tu nombre contiene ${countVocals} vocales`)

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

// let paragraph = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"

// let countEstudiante = (paragraph.match(/estudiante/g) || []).length;

// let newParagraph= paragraph.replace(/estudiante/g,"Koder")

// console.log(`El parrafo contiene la palabra estudiante ${countEstudiante} veces`)
// console.log(`El nuevo parrafo es: ${newParagraph}`)

/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

// function compareString(compareStringOne,compareStringTwo){
//     let respuesta
//     if(compareStringOne.length > compareStringTwo.length){
//         respuesta = `el string ${compareStringOne} es el más largo`
//     }else if (compareStringOne.length < compareStringTwo.length){
//         respuesta = `el string ${compareStringTwo} es el más largo`
//     }else{
//         respuesta = "Ambos Strings son iguales"
//     }
//     return respuesta
// }

// let compareStringOne = prompt("Escriba primer string a comparar")
// let compareStringTwo = prompt("Escriba segundo string a comparar")

// console.log(compareString(compareStringOne,compareStringTwo))

/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
// */
// let stringTwoWords = prompt("Escriba  string de 2 palabras")

// function isLongerWord(stringTwoWords){
//     const myArray = stringTwoWords.split(" ")

//     let wordOne = myArray[0]
//     let wordTwo = myArray[1]

//     let respuesta
//     if(wordOne.length > wordTwo.length){
//         respuesta = wordOne
//     }else if (wordOne.length < wordTwo.length){
//         respuesta = wordTwo
//     }else{
//         respuesta = "Ambas palabras son iguales"
//     }
//     return respuesta

// }

// console.log(isLongerWord(stringTwoWords))

/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"

Algoritmo
1. Solicitar palabra y guardar en una variables
2. Aplicar ordenamiento inverso a palabra
    2.1 Dividir la palabra usando .split y obteniendo un array
    2.2 Aplicar .reverse a array obtenido en 2.1
    2.3 Unir con .joint el nuevo array y guardarlo en una variabale
3. Imprimir en consoloa variable de 2.3
*/

// let stringToReverse = prompt("Escribe una palabra:")

// function stringReverse(stringReverse){
//     let stringReverseSplit = stringReverse.split("")
//     let arrayReverse = stringReverseSplit.reverse()
//     let joinArrayReverse = arrayReverse.join("")

//     return joinArrayReverse
// }

// console.log(stringReverse(stringToReverse))


// Usando ciclo for
let stringToReverse = prompt("Escribe una palabra:")

let stringLength = stringToReverse.length
let result=""

for (let index = (stringLength-1); index >= 0; index--){
    result += stringToReverse.charAt(index)
}

console.log(result)


/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"

1. Solicitar parrafo y guardar en una variable
2. Analizar frase de acuerdo al siguiente criterio:
    2.1 Dividir la frase en letras
    2.2 Si la letra es modulo%2 (es decir true)
        2.2.1 Convertir letra en mayuscula
        2.2.2 Sino,  Convertir letra en minuscula
    2.3 Unir letras con .join
3. Imprimir en consola variable de 2.3
*/

// let paragraph = prompt("Escribe una frase:")

// function capitalizeParagraph(paragraph){
    
//     return paragraph.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
// }

// console.log(capitalizeParagraph(paragraph))

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial

 1. Solicitar palabra  y guardar en una variable
2. Identificar letra de inicio y guardar en una variable
3. Analizar los casos con regexp,if else :
    -una vocal
    -consonante
    -numero
    -caracter especial
    
3. Imprimir en consola variable de 2.3
*/

// let word = prompt("Escribe una palabra:")

// function isTypeWord(word){
//     let firstLetter = word.at(0)

//     let vocal = (firstLetter.match(/[aeiou]/gi)|| [])
//     let consonants = (firstLetter.match(/[^aeiou]/gi)|| [])
//     let number = (firstLetter.match(/[0-9]/gi)|| [])
//     let specialChar = (firstLetter.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi)|| [])

//     let result

//     if (number.length>0){
//         result = "Empieza con numero"
//     }else if (specialChar.length>0){
//         result = "Empieza con caracter especial"
//     }else if (consonants.length>0){
//         result = "Empieza con consonante"
//     }else if (vocal.length>0){
//         result =  "Empieza con vocal" 
//     }else
//         result = "Empieza con algo que no es vocal, consonante,numero o caracter especial"

//     return result
// }
// console.log(isTypeWord(word))




