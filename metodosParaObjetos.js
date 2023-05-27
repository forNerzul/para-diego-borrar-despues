const usuario = {
	name: "Dnmlss",
	age: 31,
	instruments: ["Bass", "Guitar", "Xone92"],
	saludo: () => {
		console.log("Hi!! I'm Dnmlss, Let's Fucking Rock!!");
	},
};

/*
    Metodos propios
    Los objetos pueden tener metodos personalizados.
*/
usuario.saludo();

/*
    .Objectkeys()
    Nos devuelve un arreglo con las llaves {Keys} del Objeto, es decir, nos mostraria ['name', 'age', 'instruments', 'saludo',].
*/

const resultadoKeys = Object.keys(usuario);
console.log(resultadoKeys);

/*
    .Objectvalues()
    Nos devuelve un arreglo con los valores (values) del Objeto, es decir, nos mostraria ['Dnmlss', '31', '["Bass", "Guitar", "Xone92"]', 'f',].
*/

const resultadoValues = Object.values(usuario);
console.log(resultadoValues);

/*
    Objetc.entries()
    Nos devuelve un arreglo, con las parejas de clave y valor del objeto, es decir, nos mostraria [Array(2), Array(2), Array(2), Array(2)]. 4 Arrays y con cada Array hay un () mostrandote la cantidad de propiedades que tiene el metodo.
*/

const resultadoDeAmbos = Object.entries(usuario);
console.log(resultadoDeAmbos);

console.log(`El Objeto tiene (${resultadoDeAmbos.length}) propiedades.`); // De esta forma sabremos cuantas propiedades tiene nuestro objeto.
