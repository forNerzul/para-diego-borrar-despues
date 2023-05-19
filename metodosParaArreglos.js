const colores = ["Rojo", "Amarillo", "Verde"];

/*
  .length
  (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo
*/

console.log(colores.length);

/*
    .toString()
    (metodo) - Nos permite convertir un arreglo a una cadena de texto
    Por ejemplo, para poder mostrarlo en el navegador
*/
//document.body.innerHTML = colores.toString();

/*
    .join()
    (metodo) - Nos permite convertir un arreglo a una cadena de texto y separar cada elemento con el caracter que le pasemos como argumento
*/
console.log(colores.join(" - "));

/*
    .sort()
    (metodo) - Nos permite ordenar los elementos de un arreglo alfabeticamente
*/
let letras = ["c", "b", "d", "a"];
console.log(letras.sort());

// tambien ordena numeros
let numeros = ["4", "2", "1", "3"];
console.log(numeros.sort());

/*
    .reverse()
    (metodo) - Nos permite invertir el orden de los elementos de un arreglo (del ultimo al primero, descendente)
*/

console.log(letras.reverse());
console.log(numeros.reverse());

/*
    .concat()
    (metodo) - Nos permite juntar dos arreglos en uno solo
*/

const arrgelo1 = ["a", "b", "c"]; // tambien se puede crear una variable arreglo3 y asignarle el valor de arreglo1.concat(arreglo2)
const arrgelo2 = [1, 2, 3];
console.log(arrgelo1.concat(arrgelo2));

/*
    .push()
    (metodo) - Nos permite agregar un elemento al final del arreglo.
*/

colores.push("Grone"); // Agrega el elemento al final del arreglo
console.log(colores);

/*
    .pop()
    (metodo) - Nos permite eliminar el ultimo elemento del arreglo.
*/

colores.pop();
console.log(colores);

/*
    .shift()
    (metodo) - Nos permite eliminar el primer elemento del arreglo y reasignar los indices de los demas elementos.
*/
const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];
console.log(dias);
const diaEliminado = dias.shift(); // Guarda el dia eliminado en una variable.
console.log(dias);
console.log(diaEliminado);

/*
    .unshift()
    (metodo) - Nos permite agregar un elemento al inicio del arreglo y empuja los demas elementos hacia la derecha.
*/

dias.unshift("Dnmlss");
console.log(dias);

/*
    .splice()
    (metodo) - Nos permite insertar a un arreglo donde le especifiquemos.
    - 1er argumento: indice/posicion donde queremos comenzar a insertar los elementos.
    - 2do argumento: Si queremos eliminar elementos del arreglo desde la posicion indicada.
    - Resto de argumentos: Los elementos que queremos insertar.
*/

const amigos = ["Dnmlss", "Uhsergiao", "Katiusca"];
console.log(amigos);
amigos.splice(2, 1, "Lomborio", "Matungo"); // El primer argumento define desde donde se inserta el nuevo elemento, el segundo argumento define cuantos elementos se eliminan desde la posicion indicada, y el resto de argumentos son los elementos que se insertan.
console.log(amigos);

/*
    .slice()
    (metodo) - Nos permite copiar una parte de un arreglo a otro.
    - 1er argumento: indice/posicion donde queremos comenzar a copiar los elementos.
    - 2do argumento: indice/posicion donde queremos terminar de copiar los elementos.
*/
const frutas = [
    "Manzana",
    "Pera",
    "Banana",
    "Uva",
    "Sandia",
    "Piña",
    "Naranja",
];
const frutasFavoritas = frutas.slice(1, 5); // El primer argumento define desde donde se copia el elemento, y el segundo argumento define hasta donde se copia el elemento.
