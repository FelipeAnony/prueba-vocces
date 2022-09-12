const { findUniq } = require('../ejercicios/1');

describe('Prueba 1', () => {
  it('Should return null if the param provided is not an array', () => {
    const notAnArray = {};

    expect(findUniq(notAnArray)).toBeNull();
  });

  it('Should return the unique element of the list', () => {
    const array1 = ['12', 10, '12', 11, 1, 11, 10, '12'];
    const array2 = [
      'Capitán América',
      'Hulk',
      'Deadpool',
      'Capitán América',
      'Hulk',
      'Wonder Woman',
      'Deadpool',
      'Iron Man',
      'Iron Man',
    ];

    expect(findUniq(array1)).toBe(1);
    expect(findUniq(array2)).toBe('Wonder Woman');
  });
});
