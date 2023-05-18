/*
    Operadores Lógicos
    Nos permiten combinar valores booleanos y su resultado también es un booleano
    &&    AND
    ||    OR
    !     NOT

*/

const nombre = "Dnmlss";
const edad = 17;
const tieneEntrada = true;
const estaAcompañado = true;

// Comparamos solo la eda y concatenamos un texto con el resultado
const permitirAcceso = edad >= 18;
console.log("Acceso permitido a la Party: " + permitirAcceso);

// Comparamos la edad y si tiene entrada
// Utilizamos el operador AND (Andspersan) (&&) para que se cumplan las dos condiciones.
const permitirAcceso2 = edad >= 18 && tieneEntrada == true;
console.log("Acceso permitido a la Party beatch: " + permitirAcceso2);

// Ejemplo utilizando el operador OR (||)
const permitirAcceso3 = (edad >= 18 && tieneEntrada) || estaAcompañado;
console.log("Acceso permitido a la Party: " + permitirAcceso3);

// Ejemplo utilizando el operador NOT (!)
const variable = true;
console.log(!variable); // false (negamos el valor de la variable, lo invertimos)

//  Tambien se utiliza para hacer comparaciones
tieneEntrada == true; // (es un valor verdadero)
!tieneEntrada == false; // (es un valor falso)

// 