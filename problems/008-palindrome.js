/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    var cloneOne = value.split("");
    for (var i = 0; i < cloneOne.length; i++) {
        if (cloneOne[i] != cloneOne.reverse()[i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
