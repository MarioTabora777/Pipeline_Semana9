/**
 * Funciones de utilidad para demostración de CI/CD
 */

// Función 1: Suma dos números
function sumar(a, b) {
  return a + b;
}

// Función 2: Verifica si un número es par
function esPar(numero) {
  return numero % 2 === 0;
}

// Función 3: Invierte un string
function invertirString(texto) {
  if (typeof texto !== 'string') {
    return '';
  }
  return texto.split('').reverse().join('');
}

// Función 4: Calcula el factorial de un número
function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  sumar,
  esPar,
  invertirString,
  factorial
};
