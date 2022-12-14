const { numbersTop } = require('../ejercicios/2');

const array1 = [3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1];
const array2 = ['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3];

describe('Prueba 2', () => {
  it('Should return null if the param provided is not an array', () => {
    const notAnArray = {};

    expect(numbersTop(notAnArray)).toBeNull();
  });

  it('Should return the 3 most repeated elements in descending order by default', () => {
    expect(numbersTop(array1)).toEqual([1, 3, 2]);
    expect(numbersTop(array2)).toEqual(['a', 3, 2]);
  });

  it('Should return the correct amount of elements when amount param is provided', () => {
    expect(numbersTop(array1, 2).length).toBe(2);
    expect(numbersTop(array2, 4).length).toBe(4);
  });
});
