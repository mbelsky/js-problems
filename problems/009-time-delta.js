/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    function second(str) {
        var array = str.split(":");
        var result = Number(
            array[0] * 3600 + Number(array[1] * 60) + Number(array[2])
        );
        return result;
    }

    return second(y) - second(x);
}

module.exports = getTimeDelta;
