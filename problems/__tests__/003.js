const checkTicket = require('../003-ticket');

test('Тестирование задачи "003-ticket"', () => {
    expect(checkTicket('005212')).toBe(true);
    expect(checkTicket('133700')).toBe(true);
    expect(checkTicket('123032')).toBe(false);
});
