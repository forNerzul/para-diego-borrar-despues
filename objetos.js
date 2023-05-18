// A las variables dentro de un objeto se les llama propiedades
// A las funciones dentro de un objeto se les llama metodos

const personaArreglo = [
    "Dnmlss",
    31,
    "correo@correo.com",
    true,
    false,
    "Asunción",
];

const personaObjeto = {
    nombre: "Dnmlss",
    edad: 31,
    correo: "correo@correo.com",
    ciudad: "Asunción",
    DnmlssSalioDeFiesta: {
        tieneEntrada: true,
        fueDeFiesta: false,
    },
    coloresFavoritos: ["Negro", "Blanco"],
    saludo: function () {
        alert("Hola!");
    },
};
console.log(personaObjeto.nombre); // Asi accedemos solo al nombre
console.log(personaObjeto["edad"]); // esta forma permite hacer cosas geniales y resolver problemas de otra forma

// de esta forma se puede acceder  a valores de forma dinamica
const variable = "DnmlssSalioDeFiesta";
console.log(personaObjeto[variable]);

// de esta forma accedemos a un valor especifico dentro de un objeto que esta dentro de un objeto
console.log(personaObjeto.DnmlssSalioDeFiesta.tieneEntrada);

// Agregar un pais a nuestra persona
personaObjeto.pais = "Paraguay";
console.log(personaObjeto);

// Acceder a nuestro metodo (funcion) del objeto. en este caso "saludo"
personaObjeto.saludo();
