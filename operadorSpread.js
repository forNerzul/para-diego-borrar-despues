/*
    Operador Spread
    - Permite tomar los elementos de un arreglo u Objeto y expandirlos a otro sitio.
*/

// En caso de modificar el arreglo frutas, ya sea agregando o eliminando un valor, tambien lo hara en el arreglo comidasFavoritas.
const frutas = ["Pinha", "Naranja", "Manzana", "Mandarina", "Uva"];
const comidasFavoritas = ["Pizza", "Sushi", "Asado", ...frutas];
console.log(comidasFavoritas);

// Tambien funciona con objetos.

const datosLogin = {
	email: "dnm@lss",
	password: "12345",
};

const datosUsuario = {
	name: "Dnmlss",
	...datosLogin,
	age: 31,
};

console.log(datosUsuario);
