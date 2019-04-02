const repair = require('../021-repair');

test('Тестирование задачи "021-repair"', () => {
    expect(repair(1, 1, 3)).toBe(1);
    expect(repair(4, 4, 2)).toBe(2);
    expect(repair(4, 4, 3)).toBe(3);
    expect(repair(4, 4, 4)).toBe(4);
    expect(repair(10, 4, 4)).toBe(7);
});
