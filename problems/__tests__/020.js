const rle = require('../020-rle');

test('Тестирование задачи "020-rle"', () => {
    expect(rle('AAABC')).toBe('3ABC');
    expect(rle('AAaaB')).toBe('2A2aB');
    expect(rle('aAAaaB')).toBe('a2A2aB');
    expect(rle('aAAaaBBB')).toBe('a2A2a3B');
    expect(rle('false')).toBe('false');
    expect(rle('')).toBe('');
});
