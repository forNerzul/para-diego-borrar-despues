/* Tipos de datos que podemos guardar en una variable:
    - String: Cadena de Texto
    - Number: Número
    - Boolean: Booleano (Verdadero o Falso)
    - Function: Función
    - Object: Objeto    

    - Array: Arreglo
    - null: Nulo
    - undefined: Indefinido

*/

//  String: Cadenas de Texto
const nombre = "Diego";
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';

// Number: Números (enteros y decimales, positivos y negativos)

const numero = 10;
const numero2 = 10.5;
const numero3 = -10;

// Boolean: Booleanos (Verdadero o Falso)
const usuarioConectado = true;
const usuarioDesconectado = false;

const mayorQue = 10 > 5; // true
console.log(mayorQue);

// Array: Arreglos
const arreglo = ["Texto", 7, true, 10.5, { Propiedad: "Valor" }, (1, 2, 3)];
console.log(arreglo);

// Object: Objetos
const persona = {
    nombre: "Diego",
    edad: 31,
    auto: {
        marca: "BMW",
        modelo: "X4",
    },
};

console.log(persona.auto.marca);

// Function: Funciones
function hola() {
    console.log("Hola");
}
hola();

// null: Nulo
// null es un tipo de dato que se usa para indicar que una variable no tiene valor
// Se podria usar cuado quieres reinicial el valor de una variable y no sabes que poner, le pones null
const variableNula = null;

// undefined: Indefinido
// undefined es un tipo de dato que se usa para indicar que una variable no esta definida
const variableIndefinida = undefined;
