//////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 1
//Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

const nombre= "ana";

function dividirNombre(palabra){
    return palabra.split("").join(" ").toUpperCase();
}

console.log(dividirNombre(nombre));

//////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 2
//Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

const nombre0= "Fernando Alonso Díaz Garcia";

let arrayNombre= nombre0.split(" ");

function contarPalabras(numero){
    return arrayNombre.length
}

console.log(contarPalabras(nombre0));

//////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 3
//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

const frase= "ejercicio de practica";

let letra0= "e";

let arrayFrase= frase.split("");

let letrica= arrayFrase.filter(function(letra){
    return letra == letra0
});

console.log(letrica.length)
