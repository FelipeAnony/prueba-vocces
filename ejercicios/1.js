// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
  if (!Array.isArray(array)) return null; // ver comentario 1
  const itemsCount = {};

  array.forEach((e) => {
    itemsCount[e] ? itemsCount[e]++ : (itemsCount[e] = 1);
  });

  for (let key in itemsCount) {
    if (itemsCount[key] === 1) return array.find((e) => e == key); // ver comentario 2
  }
}

//comentario 1:
/**
 * Técnicamente esta verificación hecha en la primera línea de la función no es necesaria para que ella funcione,
 * sin embargo, opté por realizarla para poder aprovechar los recursos de VS Code
 * como los snippets y así mejorar la productividad, evitar errores y hacer la
 * función más robusta.
 * Podría hacer tambiem otras verificaciones, como si el array viene vacío por ejemplo,
 * pero esta juzgué innecesaria hacerla por el nombre de la función. Por su nombre, no tiene ningún
 * sentido llamarla con un array vacío y aun que eso pase el return seria undefined, lo que parece razonable.
 * Otras verificaciones, como por ejemplo verificar que todos los elementos del
 * array son válidos, no las hice para respectar y estar de acuerdo con el principio 'KISS',
 * de mantener las soluciones simples y con el 'YAGNI' al no hacer algo que no se necesite aún,
 * resultando en un código más limpio y efectivo.
 **/

//comentario 2:
/**
 * La función podría acabar con un 'return key' si su tipo esperado de return siempre fuera string.
 * El uso del método find arriba es para garantizar que devuelve el elemento original del array, de modo que el tipo
 * de dato del elemento no sea alterado de 1 para '1' por ejemplo, y con eso podemos cumplir exactamente con
 * el expect en los dos casos.
 * Al no hacerlo, podrías pasar de parámetro un array de números y recibir de return una string en
 * lugar de un número, lo que, dependiendo del caso, no estaría perfectamente correcto y obligaría al cliente a hacer validaciones.
 * De esta forma, la función es más confiable y previsible porque siempre retorna exactamente según lo que tú le pasas de parámetro.
 * Si pasas un array de números, muy probablemente esperas recibir un número como respuesta y no una string.
 **/

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
