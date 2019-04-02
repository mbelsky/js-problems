/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (
        value.length % 2 === 0 &&
        value.length !== 0 &&
        characters(value, "(") <= characters(value, ")")
    ) {
        return true;
    } else return false;
}

function characters(string, symbol) {
    var countSym = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === symbol) {
            countSym += i;
        }
    }
    return countSym;
}

module.exports = parentheses;
