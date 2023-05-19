/*
    Block Scope / Alcance de tipo bloque
    - Pertenece a las variables declaradas con const o let dentro de un bloque (codigos dentro de llaves {}).
    - Solo podemos accedera ellas dentro del bloque donde fueron declaradas.
    - Las variables declaradas con var no tienen alcance de bloque.
*/

// Ejemplo #1: scope tipo bloque. la variable accesoPermitido solo existe dentro del bloque if
const edad = 19;
if (edad >= 18) {
    const accesoPermitido = true;
    //console.log(accesoPermitido);
}

// Ejemplo #2: En este caso el primer if es el bloque principal, aqui mostramos como se puede acceder a la variable esMayor desde dentro del bloque if anidado y tambien desde una funcion declarada dentro del bloque if anidado. es decir, que las variables declaradas con const o let dentro de un bloque, pueden ser accedidas desde bloques anidados y desde funciones declaradas dentro de bloques anidados.
const edad2 = 21;
if (edad2 >= 18) {
    const esMayor = true;
    console.log(esMayor);

    if (true) {
        console.log(esMayor);
    }

    const miFuncion = () => {
        console.log(esMayor);
    };
    miFuncion();
}

const esMayor = "SI"; // Aqui cambiamos el valor de la variable esMayor, sin afectar a la variable declarada dentro del bloque de arriba.
console.log(esMayor);

// En el caso de variables creadas con var, estas no tienen alcance de bloque, por lo que pueden ser accedidas desde cualquier parte del codigo, incluso desde fuera del bloque donde fueron declaradas.
if (true) {
    var nombre = "Culo ne";
    console.log(nombre); // se muestra 2 veces. una desde dentro del bloque y otra desde fuera del bloque
}

console.log(nombre); // Culo ne
