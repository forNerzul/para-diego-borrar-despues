// Ejemplo basico de arreglo
const arreglo = ["Dnmlss", 31, true, 10.5, { propiedad: "valor" }, [1, 2, 3]];
console.log(arreglo);

// Como acceder a cada elemento del arreglo
const amigos = ["Dnmlss", "Uhsergiao", "Katiusca"];
console.log(amigos[1]);

// Como agregar elementos al arreglo
// Obs: no es muy recomendable ni muy utilizado agregar elementos de esta forma, ni saltarse indices
const colores = [];
colores[0] = "Verde";
colores[1] = "Azul";
colores[3] = "Naraja"; // Se salta el indice 2

// Como visualizar cuantos elementos tenemos en el arreglo
console.log("El arreglo colores tiene: " + colores.length + " elementos");

// Como agregar elementos al arreglo de forma mas recomendable
// Añade elementos al final del arreglo, sin necesidad de saber cuantos elementos tiene.
colores.push("Amarillo");
console.log(colores);
