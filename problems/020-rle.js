/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    var count = 1;
    var result = "";
    for (var i = 0; i < value.length; i++) {
        var currentElement = value[i];
        var nextElement = value[i + 1];
        if (currentElement === nextElement) {
            count += 1;
        } else {
            if (count > 1) {
                result += count;
            }

            result += currentElement;
            count = 1;
        }
    }
    return result;
}

module.exports = rle;
