const flatten = require('../030-flatten');

test('Тестирование задачи "030-flatten"', () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([1])).toEqual([1]);
    expect(flatten([1, 1])).toEqual([1, 1]);
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[], [[]], [[], [[[]]]]])).toEqual([]);
});
