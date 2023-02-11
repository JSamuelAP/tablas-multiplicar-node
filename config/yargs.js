const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Base de la tabla de multiplicar",
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Mostrar la tabla en consola",
	})
	.option("h", {
		alias: "hasta",
		type: "number",
		default: 10,
		describe: "Numero hasta el cual multiplicar la base",
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) throw "La base tiene que ser un número";
		if (isNaN(argv.h)) throw "Hasta tiene que ser un número";
		if (argv.h <= 0) throw "Hasta tiene que ser un número entero positivo";
		return true;
	}).argv;

module.exports = argv;
