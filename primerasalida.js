const colors = require("colors");
const { Estadistica } = require("./clases/estadistica");
const estadistica = new Estadistica();
console.log( `EL factorial del numero es: ${estadistica.factorial(5)}`.blue);