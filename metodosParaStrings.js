/*
    .length
    (propiedad)
    Devuelve el numero de caracteres de una cadena de texto.
*/

const texto = "Hello MotherFucker!!";
console.log(texto.length);

/*
    .indexOf() & .lastIndexOf() - Devuelve el index del primer/ultimo caracter especificado.
    Con estos metodos podremos conocer las posiciones de la la primera y la ultima letra.
*/

console.log(texto.indexOf("e")); // En este caso buscamos la primera letra.
console.log(texto.lastIndexOf("e")); // En este caso buscamos la ultima letra.

/*
    .slice()
    (metodo) - Nos devuelve un fragmento de una cadena de texto.
    - 1er parametro: index desde donde queremos cortar/copiar.
    - 2do parametro (Opcional): index hasta donde queremos cortar/pegar.
        Obs: No altera el valor original del texto. Lo que hace es copiar el valor que elegimos y devolvernos en una variable sin alterar el valor original del texto.
*/

console.log(texto.slice(0, 5));

// Lo anterior pero de una forma mas dinamica.

const index = texto.indexOf("M");
console.log(index); // Vemos que su indice es 6
console.log(texto.slice(6)); // Nos copia desde la M.

/*
    .replace() - Devuelve una cadena de texto donde remplaza un valor por otro.
    1er parametro: - El texto que queremos remplazar.
    2do parametro: - El texto que queremos poner.
*/

const modificacion = texto.replace("Hello", "Hi!!");
console.log(modificacion);
/*
    .split() - Convierte una cadena de texto en un arreglo.
    - Tenemos que especificar en donde cortar cada elemento.
    1er parametro: el caracter que funcionara como separador.
*/

console.log(modificacion.split(" "));

/*
    .toUpperCase() .toLowerCase()
    - Devuelve la cadena de texto todo en MAYUSCULAS/minusculas.
*/

console.log(texto.toUpperCase());
console.log(texto.toLocaleLowerCase());
