// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
  /**
   * Técnicamente esta verificación abajo no es necesaria para que la función funcione,
   * sin embargo opté por realizarla para poder aprovechar los recursos de vscode
   * como los snippets y así mejorar la productividad, evitar errores y hacer la
   * función más robusta.
   **/

  if (!Array.isArray(array)) return null;

  const itemsCount = {};

  array.forEach((e) => {
    if (itemsCount[e]) {
      itemsCount[e]++;
    } else {
      itemsCount[e] = 1;
    }
  });

  for (let key in itemsCount) {
    if (itemsCount[key] === 1) {
      /**
       * la funcion podria acabar con un 'return key' si su tipo esperado de return siempre fuera string.
       * Esto abajo es para garantizar que devuelve el elemento original del array, de modo que el tipo
       * de dato del elemento no sea alterado de 1 para '1' por ejemplo y con eso podemos cumplir exactamente con
       * el expect en los dos casos.
       * Al no hacerlo, podrias pasar de parametro un array de numeros y recibir de return una string en
       * lugar de un numero, lo que, dependendo del caso, no estaria perfectamente correcto y obligaria al cliente a hacer validaciones.
       **/

      const originalArrayItem = array.find((e) => e == key);
      return originalArrayItem;
    }
  }
}

/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']); // 1

findUniq([
  'Capitán América',
  'Hulk',
  'Deadpool',
  'Capitán América',
  'Hulk',
  'Wonder Woman',
  'Deadpool',
  'Iron Man',
  'Iron Man',
]); // 'Wonder Woman'

module.exports.findUniq = findUniq;
