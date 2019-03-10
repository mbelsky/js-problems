const computeOrizurus = require('../004-orizuru');

test('Тестирование задачи "004-orizuru"', () => {
    expect(computeOrizurus(6)).toEqual([1, 4, 1]);
    expect(computeOrizurus(24)).toEqual([4, 16, 4]);
    expect(computeOrizurus(11)).toEqual([1, 9, 1]);
});
