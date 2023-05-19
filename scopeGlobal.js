/*
 Global Scope o Variables Globales
 - Son las variables declaradas fuera de una funcion.
    - Son accesibles desde cualquier parte del codigo, incluso dentro de funciones.
    - Podemos usar const, let o var para declarar variables globales.
*/

// Declaramos una variable global.
var nombre = "Dnmlss";
console.log(nombre);

// Podemos acceder a la variable global desde una funcion.
const saludo = () => {
    console.log(`Hola ${nombre}`);

    nombre = "Diego"; // Podemos modificar el valor de la variable global desde una funcion.
    console.log(`El nuevo nombre es: ${nombre}`);
};
saludo();
