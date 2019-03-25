/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */

function HowMath(element) {
    var arrTime = element.split(":");
    var sec =
        Math.abs(arrTime[0]) * Math.pow(60, 2) +
        Math.abs(arrTime[1]) * 60 +
        Math.abs(arrTime[2]);
    return sec;
}

function compareNumbers(a, b) {
    return HowMath(a) - HowMath(b);
}

function sortTimestamps(list) {
    return list.sort(compareNumbers);
}

module.exports = sortTimestamps;
