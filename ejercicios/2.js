// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

// con el parametro opcional amount, podemos cambiar la cantidad de elementos retornados. De esta manera, estamos de acuerdo con el
// Open/Closed principle.

function numbersTop(array, amount = 3) {
  if (!Array.isArray(array)) return null;
  const itemsCount = {};

  array.forEach((e) => {
    itemsCount[e] ? itemsCount[e]++ : (itemsCount[e] = 1);
  });

  // Asi como en el ejercicio anterior, opté por utilizar find en el array
  // original por las mismas razones, pero podriamos omitir el ultimo map de acuerdo con el caso
  const sortedItemsCount = Object.keys(itemsCount)
    .sort((a, b) => itemsCount[b] - itemsCount[a])
    .map((e) => array.find((el) => e == el));

  return sortedItemsCount.slice(0, amount);
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]); // [ 'a', 3, 2 ]

module.exports.numbersTop = numbersTop;
