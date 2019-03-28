const vacation = require('../026-vacation');

test('Тестирование задачи "026-vacation"', () => {
    expect(vacation('01.01.2020')).toBe('15.01.2020');
    expect(vacation('27.01.2020')).toBe('10.02.2020');
    expect(vacation('24.02.2020')).toBe('09.03.2020');
    expect(vacation('29.02.2020')).toBe('14.03.2020');
    expect(vacation('16.11.2020')).toBe('30.11.2020');
    expect(vacation('22.02.2021')).toBe('08.03.2021');
    expect(vacation('30.12.2019')).toBe('13.01.2020');
});
