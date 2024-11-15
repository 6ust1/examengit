const colors = require("colors");
const { Estadistica } = require("./clases/estadistica");
const estadistica = new Estadistica();
console.log(`La permutacion de 8P1 es: ${estadistica.permutacion(8,1)}`.blue);	