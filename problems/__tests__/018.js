const anagram = require('../018-anagram');

test('Тестирование задачи "018-anagram"', () => {
    expect(anagram('Волос', 'Слово')).toBe(true);
    expect(anagram('Живу', 'живу')).toBe(true);
    expect(anagram('Живу', 'Вижу')).toBe(true);
    expect(anagram('апельсин', 'спаниель')).toBe(true);
    expect(anagram('Волосы', 'Слово')).toBe(false);
    expect(anagram('Волос', 'Словоъ')).toBe(false);
    expect(anagram('Волос', 'Волас')).toBe(false);
    expect(anagram('Волос', 'Волоз')).toBe(false);
    expect(anagram('11222', '11122')).toBe(false);
    expect(anagram('123', '234')).toBe(false);
    expect(anagram('', '')).toBe(false);
});
