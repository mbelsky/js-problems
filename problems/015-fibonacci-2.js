/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    var line = [0, 1];
    if (value == 0) {
        return 0;
    }
    for (var i = 1; line[i] < value; i++) {
        line.push(line[i] + line[i - 1]);
    }
    if (line[line.length - 1] == value) {
        return line.length - 1;
    }
}

module.exports = isFibonacci;
