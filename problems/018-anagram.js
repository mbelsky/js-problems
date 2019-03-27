/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    if ((x, y.length == 0 || x.length != y.length)) {
        for (var i = 0; i < x.length; i++) {
            var reg = x[i];
            if (!/reg/i.test(y)) {
                break;
            }
        }
        return false;
    }
    return true;
}
// console.log(str.search(/лю/i) != -1); // true
module.exports = anagram;
