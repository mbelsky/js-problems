const getPower = require('../010-power-of-two');

test('Тестирование задачи "010-power-of-two"', () => {
    expect(getPower(1)).toBe(0);
    expect(getPower(2)).toBe(1);
    expect(getPower(3)).toBeUndefined();
    expect(getPower(4)).toBe(2);
    expect(getPower(6)).toBeUndefined();
    expect(getPower(7)).toBeUndefined();
    expect(getPower(8)).toBe(3);
    expect(getPower(10)).toBeUndefined();
    expect(getPower(256)).toBe(8);
    expect(getPower(1024)).toBe(10);
});
