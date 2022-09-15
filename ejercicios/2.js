// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
  if (!Array.isArray(array)) return null;
  const itemsCount = {};

  array.forEach((e) => {
    itemsCount[e] ? itemsCount[e]++ : (itemsCount[e] = 1);
  });

  const sortedItemsCount = Object.values(itemsCount).sort((a, b) => b - a);
  const mostRepeatedItems = [];

  sortedItemsCount.forEach((e, i) => {
    for (let key in itemsCount) {
      if (itemsCount[key] === e) {
        // Asi como en el ejercicio anterior, opté por utilizar find en el array
        // original en lugar de hacer lo que seria mas obvio, por las mismas razones.
        mostRepeatedItems[i] = array.find((el) => el == key);
      }
    }
  });

  return mostRepeatedItems.slice(0, 3);
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]); // [ 'a', 3, 2 ]

module.exports.numbersTop = numbersTop;
