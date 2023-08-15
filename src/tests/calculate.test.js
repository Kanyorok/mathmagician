import calculate from '../logic/calculate';

describe('check operations', () => {
  test('clears the calculator', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('concatenates numbers', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });
});
