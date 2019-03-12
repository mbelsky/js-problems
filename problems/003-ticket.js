/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    var a = 0;
    var b = 0;
    for (var i = 0; i <= 2; i++) {
        // a.push(Number.parseInt(number[i]));
        a += Number.parseInt(number[i]);
    }
    for (var i = 3; i <= 5; i++) {
        b += Number.parseInt(number[i]);
    }
    if (a == b) {
        return true;
    } else return false;
}

module.exports = checkTicket;
