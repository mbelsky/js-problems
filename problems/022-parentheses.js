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
    var count = 0;
    if (value.length === 0) return false;
    for (var i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            count += 1;
        }

        if (value[i] === ")") {
            if (count === 0) {
                return false;
            } else {
                count -= 1;
            }
        }
    }

    if (count !== 0) {
        return false;
    }
    return true;
}

module.exports = parentheses;
