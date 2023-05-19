/*
Operadores Aritméticos
= Operador de asignación. Se usa para asignar un valor a una variable
+ Operador de suma
- Operador de resta
* Operador de multiplicación
/ Operador de división
% Operador de módulo (resto de la división)
++ Operador de incremento o aumento
-- Operador de decremento o disminución
*/

/*

+= Suma un numero al valor de la variable
-= Resta un numero al valor de la variable
*= Multiplica un numero al valor de la variable
/= Divide un numero al valor de la variable
%= Obtiene el sobrante de una división y la asigna a la variable

*/

// Operadores de modulos %
// El operador de módulo devuelve el resto de la división entre dosjpl. números

const resultado = 10 % 3;
console.log(resultado);

// Operadores de incremento y decremento
let numero = 5;

// Incremento de 1 en 1s
numero++;
console.log(numero);

// Decremento de 1 en 1
numero--;

// Operadores de asignación
let number = 10;

// forma 1
// number = number + 5;

// Otra forma de hacerlo
number += 15; // se aplica la misma sintaxis para todos los demas operadores de asignación
console.log(number);

/*

  Operadores de comparación:
Nos permiten comparar dos valores y devuelven un resultado booleano (true o false)
==    Igual a
===   Estrictamente igual a (igual en valor y el tipo de dato)
!=    Diferente de
!==   Estrictamente diferente de (diferente en valor y el tipo de dato)
>     Mayor que
<     Menor que
>=    Mayor o igual que
<=    Menor o igual que
?     Operador ternario

*/

const result = 10 > 5; // true
const result2 = 10 < 5; // false
const result3 = 20 >= 20; // true
const result4 = 20 <= 20; // true
const result5 = 20 == 20; // true  (solo compara el valor)

// Comparar dos valores de distinto tipo

const result6 = 20 == "20"; // true
const result7 = 20 === "20"; // false (compara si el valor es igual y si el tipo de dato es igual)
console.log(result5);
console.log(result6);
console.log(result7);

// Operador ternario
// Es una forma de hacer un if en una sola linea
const resulta =
    7 > 1
        ? "El primer valor es mayor que el segundo"
        : "El segundo valor es mayor que el primero";
console.log(resulta);
