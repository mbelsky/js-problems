/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
// function sum(n) {
//     if (n == 1 || n <= 0) {
//         //базис рекурсии
//         return 1;
//     }
//     return n + sum(n - 1);
// }
function sum(n) {
    var resuil = 0;
    if (n <= 0) return 1;

    for (var i = 1; i <= n; i++) {
        resuil += i;
    }
    return resuil;
}

module.exports = sum;
