const sum = require('../001-sum');

test('Тестирование задачи "001-sum"', () => {
    expect(sum(-100)).toBe(1);
    expect(sum(0)).toBe(1);
    expect(sum(1)).toBe(1);
    expect(sum(2)).toBe(3);
    expect(sum(5)).toBe(15);
});
