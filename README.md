# Tablas de multiplicar con Node.js

## Descripción 🏝️

Aplicación de consola que genera la tabla de multiplicar de un número y lo guarda en un archivo de texto. Este proyecto fue impartido por [Fernando Herrera](https://fernando-herrera.com) en el curso de Udemy [Node: De cero a experto](https://www.udemy.com/course/node-de-cero-a-experto/).

## Autor ✒️

**JSamuel**

- [LinkeIn](https://www.linkedin.com/in/jsamuelap/)
- [Twitter](https://twitter.com/JSamuelAP)
- [GitHub](https://github.com/JSamuelAP)
- [Portafolio 💼](https://jsamuelap.github.io/)
- [Email 📧](mailto:sp4619168@gmail.com)

## Ver ejemplo en vivo 👀

Este proyecto no cuenta con una demostración pública en internet. Si se desea probar se tiene que descargar el proyecto y seguir los pasos de la instalación.

## Instalación y uso 💻

Es necesario tener instalado Node para ejecutar los siguientes comandos en una terminal:

```bash
npm install
```

Generar la tabla del 5, guardarla en un archivo de texto y mostrarla en consola:

```base
node app --base 5 -l
```

```
================
  Tabla del  5
================
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  5 x 4 = 20
  5 x 5 = 25
  5 x 6 = 30
  5 x 7 = 35
  5 x 8 = 40
  5 x 9 = 45
  5 x 10 = 50

tabla-5.txt  creado
```

Generar la tabla del 3, no mostrarla en consola y que multiplique hasta el 20:

```base
node app --base 3 -l false --hasta 20
```

```
tabla-3.txt  creado
```

## Opciones ⚙️

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Base de la tabla de multiplicar             [number] [required]
  -l, --listar   Mostrar la tabla en consola          [boolean] [default: false]
  -h, --hasta    Numero hasta el cual multiplicar la base [number] [default: 10]
```

## Licencia ⚖️

MIT License
