/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
// function checkBusTour(bridges) {
//     for (var i = 0; i < bridges.length; i++) {
//         if (bridges[i] <= 512) {
//             return (i += 1);
//         }
//     }
// }

function checkBusTour(bridges) {
    var num;
    bridges.forEach(function(element, index) {
        if (element <= 512) {
            num = index + 1;
        }
    });

    return num;
}

module.exports = checkBusTour;
