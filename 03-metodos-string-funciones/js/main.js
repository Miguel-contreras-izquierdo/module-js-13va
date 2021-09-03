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
*/
let stringTwoWords = prompt("Escriba  string de 2 palabras")

function isLongerWord(stringTwoWords){
    const myArray = stringTwoWords.split(" ")

    let wordOne = myArray[0]
    let wordTwo = myArray[1]

    let respuesta
    if(wordOne.length > wordTwo.length){
        respuesta = wordOne
    }else if (wordOne.length < wordTwo.length){
        respuesta = wordTwo
    }else{
        respuesta = "Ambas palabras son iguales"
    }
    return respuesta

}

console.log(isLongerWord(stringTwoWords))

