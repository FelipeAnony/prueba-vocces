// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
  if (!Array.isArray(array)) return null;

  const itemsCount = {};

  array.forEach((e) => {
    if (itemsCount[e]) {
      itemsCount[e]++;
    } else {
      itemsCount[e] = 1;
    }
  });

  for (let element in itemsCount) {
    if (itemsCount[element] === 1) {
      // la funcion podria acabar con un 'return element'.
      // Esto abajo es para garantizar que devuelva el elemento original,
      // de modo que su tipo de dato no sea alterado de 1 para '1' por ejemplo.

      const originalArrayItem = array.find((e) => e == element);
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
