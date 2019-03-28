const hexToRgb = require('../023-hex-to-rgb');

test('Тестирование задачи "023-hex-to-rgb"', () => {
    expect(hexToRgb('#000')).toBe('rgb(0, 0, 0)');
    expect(hexToRgb('#000000')).toBe('rgb(0, 0, 0)');
    expect(hexToRgb('#fff')).toBe('rgb(255, 255, 255)');
    expect(hexToRgb('#FFFFFF')).toBe('rgb(255, 255, 255)');
    expect(hexToRgb('#F00')).toBe('rgb(255, 0, 0)');
    expect(hexToRgb('#0f0')).toBe('rgb(0, 255, 0)');
    expect(hexToRgb('#0000C0')).toBe('rgb(0, 0, 192)');
    expect(hexToRgb('#800080')).toBe('rgb(128, 0, 128)');
});
