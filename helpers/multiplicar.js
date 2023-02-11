const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	let salidaConsola = "";
	let salidaArchivo = "";
	let resultado;

	for (let i = 1; i <= hasta; i++) {
		resultado = "" + base * i;

		salidaConsola += `  ${base} ${"x".gray} ${i} ${"=".gray} ${
			resultado.bold.green
		}\n`;
		salidaArchivo += `${base} x ${i} = ${resultado}\n`;
	}

	if (listar) {
		console.log("================".gray);
		console.log("  Tabla del ".grey, colors.green(base));
		console.log("================".gray);
		console.log(salidaConsola);
	}

	try {
		fs.writeFileSync(`./out/tabla-${base}.txt`, salidaArchivo);
		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo,
};
