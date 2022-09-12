const { increasedMeasurements } = require('../ejercicios/3');

describe('Prueba 1', () => {
  it('Should return null if the param provided is not an array', () => {
    const notAnArray = {};

    expect(increasedMeasurements(notAnArray)).toBeNull();
  });

  it('Should return the amount of days that the measurement increased', () => {
    const array1 = [
      245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222,
      221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234,
    ];

    expect(increasedMeasurements(array1)).toEqual(19);
  });
});
