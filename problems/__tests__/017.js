const census = require('../017-census');

test('Тестирование задачи "017-census"', () => {
    expect(census([{ age: 40, gender: 'Female' }])).toBeUndefined();
    expect(
        census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }])
    ).toBe(2);
    expect(
        census([
            { age: 39, gender: 'Male' },
            { age: 4, gender: 'Female' },
            { age: 40, gender: 'Female' },
            { age: 38, gender: 'Male' }
        ])
    ).toBe(1);
});
