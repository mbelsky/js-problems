const sortTimestamps = require('../016-sort-timestamps');

test('Тестирование задачи "016-sort-timestamps"', () => {
    expect(sortTimestamps([])).toEqual([]);
    expect(sortTimestamps(['00:13:37'])).toEqual(['00:13:37']);
    expect(sortTimestamps(['00:00:42', '00:00:07'])).toEqual([
        '00:00:07',
        '00:00:42'
    ]);
    expect(sortTimestamps(['00:13:37', '00:04:20'])).toEqual([
        '00:04:20',
        '00:13:37'
    ]);
    expect(sortTimestamps(['19:00:00', '00:59:59'])).toEqual([
        '00:59:59',
        '19:00:00'
    ]);
    expect(sortTimestamps(['19:00:00', '00:04:20', '00:59:59'])).toEqual([
        '00:04:20',
        '00:59:59',
        '19:00:00'
    ]);
});
