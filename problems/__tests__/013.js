const isIpValid = require('../013-ip');

test('Тестирование задачи "013-ip"', () => {
    expect(isIpValid('127.0.0.0')).toBe(true);
    expect(isIpValid('192.168.0.01')).toBe(true);
    expect(isIpValid('255.000.255.0255')).toBe(true);
    expect(isIpValid('192.255.000.255.0255')).toBe(false);
    expect(isIpValid('127.-127.0.0')).toBe(false);
    expect(isIpValid('256.-128.256.0256')).toBe(false);
    expect(isIpValid('Hello world')).toBe(false);
});
