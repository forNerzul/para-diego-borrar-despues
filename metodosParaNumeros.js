/*
    .toString()
*/

const numero = 10;

console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

/*
    .toFixed()
    Permite obtener un numero con la cantidad de decimales especificados.
*/

const pi = 3.1415;
console.log(pi.toFixed(2));

/*
    parseInt()
    - Intenta transformar un valor a un entero.
    - Solo trabaja con numeros enteros, no con decimales.
*/

// En caso de no utilizar parseInt() y utilizar solo prompt() nos va a concatenar, teniendo como resultado 1 + 1 = 11.
// const number1 = parseInt(prompt("Escriba un numero"));
// const number2 = parseInt(prompt("Escriba un numero"));
// console.log(number1 + number2);

/*
    .parseFloat()
    - Intenta transformar un valor a un decimal.
*/

// const number1Deci = parseFloat(prompt("Escriba un numero"));
// const number2Deci = parseFloat(prompt("Escriba un numero"));
// console.log(number1Deci + number2Deci);

/*
    Math.random()
    - Genera un numero al azar entre 0 y 1.
    - Math. es un Objeto, por ende comienza con mayuscula.
*/

const numeroRandom = Math.random();
console.log(numeroRandom);

/*
    Math.floor()
    - Redondea un numero hacia abajo.
*/

// Siempre redondea hacia abajo.
console.log(Math.floor(10.09));
console.log(Math.floor(10.99));

/*
    Math.ceil()
    - Redondea un numero hacia arriba.
*/

console.log(Math.ceil(10.09));
console.log(Math.ceil(10.99));

/*
    Math.round()
    - Redondea hacia el entero mas cercano.
*/

console.log(Math.round(10.25));
console.log(Math.round(10.75));

/*
    - Ejemplo de numero al azar del 0 al 100.
*/

const numberAlAzar = Math.random();
console.log(Math.floor(numberAlAzar * 101)); // Si colocamos 2001 tendremos numero al azar de 0 a 2001.
