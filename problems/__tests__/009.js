const getTimeDelta = require('../009-time-delta');

test('Тестирование задачи "009-time-delta"', () => {
    expect(getTimeDelta('00:00:00', '00:00:01')).toBe(1);
    expect(getTimeDelta('01:01:01', '02:02:02')).toBe(3661);
    expect(getTimeDelta('01:19:30', '01:20:20')).toBe(50);
});
