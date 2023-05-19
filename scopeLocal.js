/*
    Local Scope o Variables Locales
    - Son las variables declaradas dentro de una funcion.
    - Son accesibles solo dentro de la funcion donde fueron declaradas.
*/

// Ejemplo #1: obtenemos el numero de letras de una palabra

var obtenerNumeroDeLetras = (palabra) => {
    var numeroDeLetras = palabra.length; // declaramos una variable local
    console.log(`La palabra ${palabra} tiene ${numeroDeLetras} letras`);
};
obtenerNumeroDeLetras("Megazopeda");

// Ejemplo agragando una funcion dentro de la funcion

var obtenerNumeroDeLetras2 = (nombre) => {
    var numero = nombre.length;
    console.log(`El nombre ${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(
            `El nombre ${nombre} tiene ${numero} letras. (impreso desde la funcion anidada)`
        );
    };
    funcionAnidada();
};
obtenerNumeroDeLetras2("Dnmlss");
