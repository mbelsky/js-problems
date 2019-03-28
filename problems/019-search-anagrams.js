/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */

function anagram(x, y) {
    if ((x, y.length == 0 || x.length != y.length)) {
        return false;
    }
    for (var i = 0; i < x.length; i++) {
        if (!y.toLowerCase().includes(x[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

function searchAnagrams(value) {
    if (value.length == 0) return value;
    var result = [];
    var arrayWord = value.match(/[a-яА-Я]+/g);
    for (var i = 0; i < arrayWord.length; i++) {
        const element = arrayWord[i];
        var arrayFilter = arrayWord.filter(function(elements) {
            return elements != element;
        });
        for (var j = 0; j < arrayFilter.length; j++) {
            const elementY = arrayFilter[j];

            if (anagram(element, elementY)) {
                result.push(element);
            }
        }
    }
    return result.join(" ");
}

module.exports = searchAnagrams;
