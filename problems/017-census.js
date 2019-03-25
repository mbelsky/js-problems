/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {object[]} list
 * @returns {undefined|number}
 */
function census(list) {
    for (var j = 0; j < list.length; j++) {
        if (list[j].gender == "Male") {
            var result;
            var currentAge = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i].gender == "Male" && list[i].age > currentAge) {
                    result = i;
                    currentAge = list[i].age;
                }
            }
            return result + 1;
        } else return undefined;
    }
}
module.exports = census;
