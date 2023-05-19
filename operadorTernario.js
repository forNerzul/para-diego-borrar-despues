// Supongamos que tenemos una pag web donde queremos vender entradas para conciertos, y estas entradas pueden ser de 2 tipos: vip y regular(cualquier otro tipo), dependiendo del tipo de entrada le debemos dar un codigo de acceso a la zona correspondiente. Para ello usaremos el operador ternario.

const tipoDeEntrada = "vip";
// let codigoAcceso;

// if (tipoDeEntrada === "vip") {
//   codigoAcceso = "VIP-123-456";
// } else {
//   codigoAcceso = "REGULAR-456-789";
// }

// Operador ternario (Con este codigo resumimos el codigo de arriba)
// Utilizamos condiciones para asignar un valor a una variable
const codigoAcceso =
    tipoDeEntrada === "vip" ? "VIP-123-456" : "REGULAR-456-789";
console.log(codigoAcceso);

// Aqui utilizamos como condicional if y else, pero en vez de guarda en variables, ejecutamos un codigo, en este caso un console.log
tipoDeEntrada === "vip"
    ? console.log("Tu entrada es de tipo VIP")
    : console.log("Tu entrada es de tipo REGULAR");
