/*
    .indexOf()
    Obtenemos el primer index de un elemento.
    Si no existe el elemento, nos retorna -1.
*/

const nombres = [
	"Dnmlss",
	"Petter",
	"Corey",
	"Jhon",
	"Salchichon",
	"Regal",
	"Corey",
	"Marcell",
	"Aladin",
];
console.log(nombres.indexOf("Corey")); // nos mostraria el index numero 2.

/*  .lastIndexOf()
    Obtenemos el ultimo index de un elemento.
    Si no existe el elemento, nos retorna -1.
*/

console.log(nombres.lastIndexOf("Corey")); // nos mostraria el index numero 6.

/* 
    .forEach()
    Nos permite ejecutar una funcion por cada elemento de un arreglo.
    Recibe una funcion como parametro.
    La funcion recibe como parametro cada elemento del arreglo.
*/

// Se le puede poner 2 parametros. en el ejemplo de abajo, tenemos el parametro nombre y el parametro index. El parametro nombre, nos muestra cada elemento, en este caso son nombres. El parametro index nos mostraria el index de cada elemento del arreglo.

// El parametro nombre es cada elemento del arreglo. nos mostraria Hola Dnmlss, Hola Petter, etc. En caso que no lleve parametro, nos mostraria "Hola nombre" y un globo con el numero 9, ya que tenemos 9 elementos en nuestro arreglo.

nombres.forEach((nombre, index) => {
	console.log(`Hola ${nombre} (${index})`);
});

/*   .find()
    Nos permite encontrar un elemento en un arreglo.
    Recibe una funcion como parametro.
    La funcion recibe como parametro cada elemento del arreglo.
    Si encuentra el elemento, nos retorna el elemento.
*/
// Al colocar nombre[0] el .find() convertira el elemento en un arreglo, pasando a ser ["D", "n", "m", "l", "s", "s"] y luego nos mostraria el primer elemento de ese arreglo, que seria "D". Si colocamos nombre[1] nos mostraria "n", y asi sucesivamente.

// En este caso, utilizando un if, le decimos que si el primer elemento del arreglo es igual a "S", nos retorne el elemento que comienza con S.

const resultado = nombres.find((nombre) => {
	if (nombre[0] === "S") {
		return nombre;
	}
});

console.log(resultado); // nos mostraria Salchichon, ya que es el primer elemento que empieza con S.

/*  .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion.
    Recibe una funcion como parametro.
    La funcion recibe como parametro cada elemento del arreglo.
*/

// Este metodo se va a utilizar bastante para cuando queres ejecutar una funcion por cada elemento, y ese elemento devolverlo para guardarlo en un arreglo. Ya sea si tiene una modificacion de cualquier tipo, como por ejemplo, en el ejemplo de abajo convertimos todos los elementos en mayusculas.

const nombresMayusculas = nombres.map((nombre) => {
	return nombre.toUpperCase();
});
console.log(nombresMayusculas); // nos mostraria el arreglo con todos los elementos en mayusculas.

// Mismo codigo anterior pero en una linea. En este caso ya no necesitamos las llaves, ya que es una sola linea de codigo. Y tampoco necesitamos el return, ya que al ser una sola linea de codigo, el return ya es automatico. Y tampoco necesitamos los parentesis en el parametro nombre, ya que es un solo parametro. Si tuvieramos mas de un parametro, ahi si necesitariamos los parentesis.

// Obs: estamos guardando lo que hace map en una constante, ya que map no modifica el arreglo original, sino que crea un nuevo arreglo.

const nombresMayusculas2 = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas2);

/*  
    .filter()
    Nos permite filtrar elementos de un arreglo.
    Permite ejecutar una funcion por cada elemento y luego crear un arreglo en base a los resultados de esa funcion.
    Recibe una funcion como parametro.
    La funcion recibe como parametro cada elemento del arreglo.
*/

const nombres4Letras = nombres.filter((nombre) => {
	if (nombre.length === 4) {
		return nombre;
	}
});
console.log(nombres4Letras);

/*
    .inlcudes()
    Nos permite saber si el arreglo contiene un elemento especificado.
    nos devuelve como valor true si el elemento existe en el arreglo. Si no existe nos devuelve false.
*/

console.log(nombres.includes("Dnmlss"));
console.log(nombres.includes("Di Minho"));

/*
    .every()
    Nos permite ejecutar una condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplen la condicion.
    - Sirve para validar formularios comprobando si todos los campos sean validos.
*/

const nombresValidos = nombres.every((nombre) => {
	if (typeof nombre === "string") {
		return true;
	} else {
		return false;
	}
});
console.log(`Todos los nombres son validos? ${nombresValidos}`);

/*
    .some()
    Nos permite ejecutar una condicional sobre cada elemento y nos devuelve true si ALGUNOS de los elementos cumplen esa condicion.
*/

const cumplenLaCondicion = nombres.some((nombre) => {
	if (typeof nombre !== "string") {
		return true;
	} else {
		return false;
	}
});
// true si hay algun valor invalido
// false si no hay ningun valor invalido
console.log(`El arreglo es invalido? ${cumplenLaCondicion}`);
