// Estructura de una condicional
// Esta es la estructura basica de una condicional if
/*


if (true) {
    // Codigo a ejecutar si la condicion es verdadera
}

*/

// Ejemplo #1:
const user = {
    edad: 31,
    pais: "Py",
    ticket: true,
};

if (user.edad >= 18) {
    console.log("El usuario es mayor de edad");
} else {
    console.log("El usuario es menor de edad");
}

// Ejemplo #2: (combinando operadores logicos)
const usuario = {
    edad: 31,
    pais: "Py",
    ticket: true,
};

// En este ejemplo se deben cumplir las dos condiciones para que se ejecute el codigo dentro del if

if (usuario.edad >= 18 && usuario.ticket) {
    console.log("El usuario es mayor de edad y tiene ticket");
} else {
    console.log("El usuario es menor de edad o no tiene ticket");
}

// En este ejemplo se debe cumplir al menos una de las dos condiciones para que se ejecute el codigo dentro del if

if (usuario.edad >= 18 || usuario.ticket) {
    console.log("El usuario es mayor de edad o tiene ticket");
} else {
    console.log("El usuario es menor de edad y no tiene ticket");
}

// Ejemplo #3: (Anidando condicionales) condiciones dentro de condiciones

const usu = {
    edad: 31,
    pais: "Py",
    ticket: true,
};

if (usu.edad >= 18) {
    if (usu.ticket) {
        console.log("El usuario es mayor de edad y tiene ticket");
    } else {
        console.log("El usuario es mayor de edad, pero no tiene ticket");
    }
} else {
    console.log("El usuario es menor de edad");
}

// Ejemplo #4: (else if)
const elbro = {
    edad: 31,
    pais: "Chile",
    ticket: true,
};

if (elbro.pais === "Paraguay") {
    console.log("El usuario es Paraguayo");
} else if (elbro.pais === "Argentina") {
    console.log("El usuario es Argentino");
} else if (elbro.pais === "Brasil") {
    console.log("El usuario es Brasileño");
} else {
    console.log("El usuario es de otro pais");
}
