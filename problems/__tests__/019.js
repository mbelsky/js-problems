const searchAnagrams = require('../019-search-anagrams');

test('Тестирование задачи "019-search-anagrams"', () => {
    expect(searchAnagrams('')).toBe('');
    expect(searchAnagrams('Вяжу и вижу')).toBe('');
    expect(searchAnagrams('Вижу вижу')).toBe('Вижу вижу');
    expect(searchAnagrams('Вижу апельсин значит живу. Спаниель')).toBe(
        'Вижу апельсин живу Спаниель'
    );
    expect(
        searchAnagrams('Какой резон убирать зерно, если его негде хранить?')
    ).toBe('резон зерно');
});
