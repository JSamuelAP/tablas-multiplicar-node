const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.green, " creado"))
	.catch((err) => console.error(err));
