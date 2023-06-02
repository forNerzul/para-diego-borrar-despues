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

/*
	Parametros Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extras que encuentre, los convertira en un arreglo.
	Se puede colocar la cantidad de argumentos que se necesite.
*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
	console.log(nombre, correo, datosAdicionales);
};

registrarUsuario("Dnmlss", "dnm@lss");
registrarUsuario("Dnmlss", "dnm@lss", 31, "Paraguay");

/*
	Destructuracion de objetos.
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

// Forma normal:

const amigos = ["Usergiao", "Woselo", "Katiuska"];
const primerAmigo = amigos[0];
const segundoAmigo = amigos[1];

console.log(primerAmigo);

// Destructurando objetos:

// Obs: Al trabajar con  Arrays, se puede poner cualquier nombre de variable al usar Rest para acceder a los elementos, asi como el ejemplo de abajo.
const [amigo1, amigo2, amigo3] = amigos;

console.log(amigo3, amigo2);

// Tambien funciona con objetos.

// Obs: En el caso de trabajar con objetos se debe poner el mismo nombre que las variables dentro del objeto para acceder a ellas.
const persona = {
	nombre: "Dnmlss",
	age: 31,
	country: "Paraguay",
};

const { nombre, age, country } = persona;

console.log(nombre, age, country);

const mostrarValores = (nombre, age) => {
	console.log(`${nombre} tiene ${age} anhos.`);
};

mostrarValores(persona.nombre, persona.age);

//  En vez de pasarle los valores al llamar a la funcion, imbocamos directamente al objeto, pero a los parametros que nombramos tendran que estar dentre de unas llaves.
const verValores = ({ nombre, age }) => {
	console.log(`The real fucking ${nombre} tiene ${age} anhos.`);
};

verValores(persona);
