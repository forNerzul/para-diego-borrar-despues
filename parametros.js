/*
- Parametros: los valores especificados en la definicion de una funcion (dentro de los parentesis)
- Argumentos: los valores que se pasan a la funcion cuando esta es invocada (dentro de los parentesis de la invocacion)
*/

const saludar = (nombre = "culo ne") => console.log(`Hola ${nombre}!`);
saludar("Dnmlss");
saludar("Uhsergiao");
saludar("Katiusca");
saludar();

// En el ejemplo de arriba,  (nombre = "culo ne") estamos asignandole un valor por defecto a nuestro parametro, que se imprime al invocar la funcion sin argumentos

/*
- Multiples parametros
*/

const operacion = (numero1, numero2) => {
    console.log(numero1 + numero2);
};
operacion(10, 20);

//
const operacion2 = (tipo, number1, number2) => {
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
operacion2("suma", 100, 200);
operacion2("resta", 200, 100);
operacion2("multiplicacion", 5, 5);
operacion2("division", 100, 4);
operacion2("culo", 100, 4);
