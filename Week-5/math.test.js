const { mathOperations } = require('./math.js');

describe('set of arithmetic operations', () => {
  test('sum of numbers', () => {
    expect(mathOperations.sum(1, 1)).toBe(2);
  });

  test('subtraction of numbers', () => {
    expect(mathOperations.diff(1, 1)).toBe(0);
  });

  test('multiply of numbers', () => {
    expect(mathOperations.product(1, 1)).toBe(1);
  });
});
