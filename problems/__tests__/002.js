const getWinner = require('../002-basketball');

test('Тестирование задачи "002-basketball"', () => {
    expect(getWinner(['23-26', '24-30', '30-27', '35-31'])).toBe(2);
    expect(getWinner(['36-32', '32-24', '20-28', '30-26'])).toBe(1);
    expect(getWinner(['36-18', '22-31', '27-21', '19-34'])).toBeUndefined();
});
