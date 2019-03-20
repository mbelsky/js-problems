const metro = require('../025-metro');

test('Тестирование задачи "025-metro"', () => {
    expect(metro(1, 2)).toBe(0);
    expect(metro(1, 3)).toBe(1);
    expect(metro(2, 7)).toBe(4);
    expect(metro(11, 7)).toBe(3);
    expect(metro(1, 13)).toBe(0);
    expect(metro(13, 1)).toBe(0);
    expect(metro(1, 7)).toBe(5);
    expect(metro(1, 8)).toBe(5);
    expect(metro(13, 6)).toBe(5);
    expect(metro(13, 7)).toBe(5);
});
