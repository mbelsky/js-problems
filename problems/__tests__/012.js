const validatePassword = require('../012-password');

test('Тестирование задачи "012-password"', () => {
    expect(validatePassword('abc4DEFG')).toBe(true);
    expect(validatePassword('abc456F')).toBe(true);
    expect(validatePassword('aBC456F')).toBe(true);
    expect(validatePassword('abcdefg')).toBe(false);
    expect(validatePassword('abcdefG')).toBe(false);
    expect(validatePassword('abcdef7')).toBe(false);
});
