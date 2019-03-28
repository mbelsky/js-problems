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
    var result = [];
    var arrStr = value.split("");
    for (var i = 0; i < arrStr.length; i++) {
        var currentElement = arrStr[i];
        var nextElement = arrStr[i + 1];
        if (currentElement === nextElement) {
            count += 1;
        } else {
            if (count > 1) {
                result.push(count);
            }

            result.push(currentElement);
            count = 1;
        }
    }
    return result.join("");
}

module.exports = rle;
