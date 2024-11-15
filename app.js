const colors = require("colors");
const { Calculadora } = require("./clases/calculadora");
const { Estadistica } = require("./clases/estadistica");
const calculadora = new Calculadora();
const estadistica = new Estadistica();

let numero = 6;


console.log ("Bienvenidos a nuestra evaluacion ;)".yellow);

console.log( `EL factorial del numero es:, ${estadistica.factorial(5)}`.blue);
console.log(`El factorial de -1 es: ,${estadistica.factorial(-1)}`.blue);
console.log(`La combinatoria de 6C2 es: ,${estadistica.combinatoria(6,2)}`.blue);
console.log(`La permutacion de 8P1 es: ,${estadistica.permutacion(8,1)}`.blue);	
console.log(`La resta del factorial de 5! - el factorial de 4! es: ,${calculadora.resta(estadistica.factorial(5),estadistica.factorial(4))}`.blue);

console.log ("Hasta luego nos vemos pronto ;)".red);