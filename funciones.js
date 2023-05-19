// Definiciones de funciones

// Forma #1
function saludar() {
    console.log("Hola!");
}
saludar();

// Forma #2 - Asignando una funcion a una variable
const saludar2 = function () {
    console.log("Hola desde variable!");
};

// Forma #3 - Arrow Function (Funciones tipo Flecha)

const saludar3 = () => console.log("Hola desde arrow function!");
saludar3();
