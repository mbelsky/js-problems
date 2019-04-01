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
    if ((x, y.length === 0 || x.length !== y.length)) {
        return false;
    }
    var objX = createObj(x);
    var objY = createObj(y);

    for (var key in objX) {
        // if (key in objY) {

        if (objX[key] !== objY[key]) {
            return false;
        }
    }

    return true;
}

function createObj(word) {
    var obj = {};
    for (var i = 0; i < word.length; i++) {
        var key = word[i].toLowerCase();
        if (key in obj) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}

//переделать
module.exports = anagram;
