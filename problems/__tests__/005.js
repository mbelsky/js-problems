const union = require('../005-union');

test('Тестирование задачи "005-union"', () => {
    expect(union([1, 1, 3, 2, 5], [5, 3, 7, 7])).toEqual([3, 5]);
    expect(union([5, 3], [5, 3, 7, 7])).toEqual([3, 5]);
    expect(
        union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18])
    ).toEqual([6, 12]);
    expect(union([1, 2, 3], [11, 0, -1])).toEqual([]);
});
