/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    var cutcolor = color.substr(1);
    if (cutcolor.length === 3) {
        var large = "";
        for (let i = 0; i < cutcolor.length; i++) {
            const element = cutcolor[i];
            large += element + element;
        }
    } else large = cutcolor;
    //   var c = large.substr(0, 2);
    var x = parseInt(large.substr(0, 2), 16);
    var y = parseInt(large.substr(2, 2), 16);
    var z = parseInt(large.substr(4, 2), 16);
    var result = "rgb(" + x + ", " + y + ", " + z + ")";

    return result;
}

module.exports = hexToRgb;
