const decrypt = require('../011-decrypt');

test('Тестирование задачи "011-decrypt"', () => {
    expect(decrypt('bnqqdbs')).toBe('correct');
    expect(decrypt('zmc vd hfmnqd rozbdr')).toBe('and we ignore spaces');
});
