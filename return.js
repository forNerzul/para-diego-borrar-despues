// Esta funcion tiene un problema, esta haciendo 2 tareas (una operacion y mostrando en consola), deberia hacer solo una.
/*
const operation = (tipo, number1, number2) => {
    if (tipo === "suma") {
        console.log(number1 + number2);
    } else if (tipo === "resta") {
        console.log(number1 - number2);
    } else if (tipo === "multiplicacion") {
        console.log(number1 * number2);
    } else if (tipo === "division") {
        console.log(number1 / number2);
    } else {
        console.log("No se puede realizar la operacion");
    }
};
*/
// Debemos hacer que nuestro codigo sea sustentable y no nos traiga problemas mas adelante.

const operacion = (tipo, numero1, numero2) => {
    let resultado;

    if (tipo === "suma") {
        resultado = numero1 + numero2;
    } else if (tipo === "resta") {
        resultado = numero1 - numero2;
    } else if (tipo === "multiplicacion") {
        resultado = numero1 * numero2;
    } else if (tipo === "division") {
        resultado = numero1 / numero2;
    }

    return resultado;
};

const multi = operacion("multiplicacion", 5, 5);
console.log(multi);
const divi = operacion("division", 100, 5);
console.log(divi);
const suma = operacion("suma", 50, 25);
console.log(suma);
const resta = operacion("resta", 50, 25);
console.log(resta);

// Resumimos el codigo de arriba
const operachion = (tipo, numero1, numero2) => {
    if (tipo === "suma") {
        return numero1 + numero2;
    } else if (tipo === "resta") {
        return numero1 - numero2;
    } else if (tipo === "multiplicacion") {
        return numero1 * numero2;
    } else if (tipo === "division") {
        return numero1 / numero2;
    }
};

const multip = operachion("multiplicacion", 5, 1);
console.log(multip);
const divis = operachion("division", 100, 2);
console.log(divis);
const sum = operachion("suma", 50, 40);
console.log(sum);
const rest = operachion("resta", 50, 40);
console.log(rest);
