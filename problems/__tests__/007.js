const checkBusTour = require('../007-bus-tour');

test('Тестирование задачи "007-bus-tour"', () => {
    expect(checkBusTour([600, 1024])).toBeUndefined();
    expect(checkBusTour([600, 512])).toBe(2);
});
