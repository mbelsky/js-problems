const isPalindrome = require('../008-palindrome');

test('Тестирование задачи "008-palindrome"', () => {
    expect(isPalindrome('true')).toBe(false);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('7')).toBe(true);
    expect(isPalindrome('42')).toBe(false);
    expect(isPalindrome('121')).toBe(true);
    expect(isPalindrome('boob')).toBe(true);
    expect(isPalindrome('шалаш')).toBe(true);
});
