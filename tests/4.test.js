const { showText, showText2 } = require('../ejercicios/4');

const mockedConsoleLog = jest.fn((value) => {});

global.console.log = mockedConsoleLog;

describe('Ejercicio 4', () => {
  it('Should call console.log with the correct value when showtext init method is called', () => {
    showText.init();
    expect(mockedConsoleLog).toBeCalledWith('Hola');
  });

  it('Should call console.log with the correct value when showtext2 init method is called', () => {
    showText2.init();
    expect(mockedConsoleLog).toBeCalledWith('Adiós');
  });
});
