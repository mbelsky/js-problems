/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    var commandOne = 0;
    var commandTwo = 0;

    points.forEach(element => {
        var dash = element.indexOf("-");
        commandOne += +element.substring(0, dash);
    });
    points.forEach(element => {
        var dash = element.indexOf("-");
        commandTwo += +element.substr(dash + 1);
    });
    if (commandOne === commandTwo) return undefined;
    if (commandOne > commandTwo) {
        return 1;
    } else return 2;
}

module.exports = getWinner;
``;
