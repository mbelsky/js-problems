const getSpringMeltStreak = require('../006-spring-melt');

test('Тестирование задачи "006-spring-melt"', () => {
    expect(getSpringMeltStreak([-20, 30, -40, 50, 10, -10])).toBe(2);
    expect(getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3])).toBe(4);
    expect(getSpringMeltStreak([10, 20, 30, 0, -10, 5, 8, 1, 2, 3])).toBe(5);
    expect(getSpringMeltStreak([-10, 0, -10, 0, -10])).toBe(0);
});
