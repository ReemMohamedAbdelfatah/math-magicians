import operate from './operate';

describe('Addition', () => {
  test('should Add 2 and 3 tobe equal 5', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });
  test('should Add -50 and 100 tobe equal 50', () => {
    const result = operate(-50, 100, '+');
    expect(result).toBe('50');
  });
});

describe('Multiplication', () => {
  test('should Multiply Product 2 and 3 tobe equal 6', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });
  test('should Multiply Product -4 and 3 tobe equal -12', () => {
    const result = operate(-4, 3, 'x');
    expect(result).toBe('-12');
  });
});

describe('Substraction', () => {
  test('should substract  15 and 30 tobe equal -15', () => {
    const result = operate(15, 30, '-');
    expect(result).toBe('-15');
  });
  test('should substract  -5 and -7 tobe equal -12', () => {
    const result = operate(-5, -7, '-');
    expect(result).toBe('2');
  });
  test('should substract  -9 and 30 tobe equal -39', () => {
    const result = operate(-9, 30, '-');
    expect(result).toBe('-39');
  });
});

describe('Division', () => {
  test('should divide  36 by 10 tobe equal 3.6', () => {
    const result = operate(36, 10, '÷');
    expect(result).toBe('3.6');
  });
  test('should divide  99 by 9 tobe equal 11', () => {
    const result = operate(99, 9, '÷');
    expect(result).toBe('11');
  });
  test('should divide  20 by 0 tobe Can\'t divide by 0.', () => {
    const result = operate(20, 0, '÷');
    expect(result).toBe('Can\'t divide by 0.');
  });
});

describe('Modulos', () => {
  test('should find the reminder of 10 modulo 5 tobe equals 0', () => {
    const result = operate(10, 5, '%');
    expect(result).toBe('0');
  });
});
