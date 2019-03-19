/**
 * Напишите функцию getPower(n) возвращающую челочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    var counter = 2;
    var powetCount = 1;
    if (n <= 1) {
        return 0;
    }

    while (counter < n) {
        counter *= 2;
        powetCount++;
    }
    if (Math.pow(2, powetCount) === n) {
        return powetCount;
    }
}

module.exports = getPower;
