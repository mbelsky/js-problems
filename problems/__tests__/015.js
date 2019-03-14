const isFibonacci = require('../015-fibonacci-2');

test('Тестирование задачи "015-fibonacci-2"', () => {
    expect(isFibonacci(0)).toBe(0);
    expect(isFibonacci(1)).toBe(1);
    expect(isFibonacci(2)).toBe(3);
    expect(isFibonacci(3)).toBe(4);
    expect(isFibonacci(5)).toBe(5);
    expect(isFibonacci(8)).toBe(6);
    expect(isFibonacci(13)).toBe(7);
    expect(isFibonacci(21)).toBe(8);
    expect(isFibonacci(34)).toBe(9);
    expect(isFibonacci(42)).toBeUndefined();
});
