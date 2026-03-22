const { sumar, esPar, invertirString, factorial } = require('../src/utils');

// Pruebas para la función sumar
describe('sumar', () => {
  test('suma dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('suma números negativos', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

  test('suma con cero', () => {
    expect(sumar(5, 0)).toBe(5);
  });
});

// Pruebas para la función esPar
describe('esPar', () => {
  test('retorna true para número par', () => {
    expect(esPar(4)).toBe(true);
  });

  test('retorna false para número impar', () => {
    expect(esPar(7)).toBe(false);
  });

  test('cero es par', () => {
    expect(esPar(0)).toBe(true);
  });
});

// Pruebas para la función invertirString
describe('invertirString', () => {
  test('invierte un string normal', () => {
    expect(invertirString('hola')).toBe('aloh');
  });

  test('string vacío retorna vacío', () => {
    expect(invertirString('')).toBe('');
  });

  test('retorna vacío si no es string', () => {
    expect(invertirString(123)).toBe('');
  });
});

// Pruebas para la función factorial
describe('factorial', () => {
  test('factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 es 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de número negativo retorna null', () => {
    expect(factorial(-3)).toBeNull();
  });
});
