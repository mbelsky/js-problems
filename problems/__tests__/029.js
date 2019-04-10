const map = require('../029-map-parseInt');

test('Тестирование задачи "029-map-parseInt"', () => {
    expect(map()).toEqual([]);
    expect(map([])).toEqual([]);
    expect(map(['128'])).toEqual([128]);
    expect(map(['128', '64', '32'])).toEqual([128, 64, 32]);
});
