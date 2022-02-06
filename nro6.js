console.log("Ejercicio Nro 6");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const buscarPalabra = (cadena = "", palabra = undefined) =>
  !cadena
    ? console.warn("No ingresaste la cadena de texto")
    : palabra === undefined
    ? console.warn("No ingresaste la palabra a buscar")
    : console.info(
        `En la cadena "${cadena}" la palabra "${palabra}" se repite ${
          cadena.match(new RegExp(`w*${palabra}`, "gi")).length
        } veces`
      );

buscarPalabra("No hay caminos para la paz; la paz es el camino ", "paz");
buscarPalabra("No hay caminos para la paz; la paz es el camino ", "");
buscarPalabra("No hay caminos para la paz; la paz es el camino ");
buscarPalabra("", "paz");
buscarPalabra("No hay caminos para la paz; la paz es el camino ", "perro"); // ¿Como resolver este error?
