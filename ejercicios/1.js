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
 * Técnicamente esta verificación hecha en la primer linea no es necesaria para que la función funcione,
 * sin embargo opté por realizarla para poder aprovechar los recursos de vscode
 * como los snippets y así mejorar la productividad, evitar errores y hacer la
 * función más robusta.
 * Podria hacer otras verificaciones, como si el array viene vazio por ejemplo,
 * pero juzgué innecesario hacerlo por el nombre de la funcion. Por su nombre, no tiene ningun
 * sentido llamarla con un array vazio. Haciendo eso estamos de acuerdo com el principio 'KISS',
 * al mantener las soluciones simples y con el YAGNI al no hacer algo que no se necesite aun,
 * resultando en un codigo mas limpio y efectivo.
 **/

//comentario 2:
/**
 * La funcion podria acabar con un 'return key' si su tipo esperado de return siempre fuera string.
 * El uso del metodo find arriba es para garantizar que devuelve el elemento original del array, de modo que el tipo
 * de dato del elemento no sea alterado de 1 para '1' por ejemplo y con eso podemos cumplir exactamente con
 * el expect en los dos casos.
 * Al no hacerlo, podrias pasar de parametro un array de numeros y recibir de return una string en
 * lugar de un numero, lo que, dependendo del caso, no estaria perfectamente correcto y obligaria al cliente a hacer validaciones.
 * De esta forma, la funcion es mas confiable y previsible porque siempre retorna exactamente segun lo que tu le pasas de parametro.
 * Si passas un array de numeros, muy problamente esperas recibir un numero.
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
