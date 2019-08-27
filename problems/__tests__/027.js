const has = require('../027-has');

const testObject = {
    a: 1,
    o: {
        a: 2
    },
    n: null,
    'a.b.c': undefined
};

test('Тестирование задачи "027-has"', () => {
    expect(has(['a'], testObject)).toBe(true);
    expect(has(['b'], testObject)).toBe(false);
    expect(has(['o', 'a'], testObject)).toBe(true);
    expect(has(['o', 'b'], testObject)).toBe(false);
    expect(has(['a.b.c'], testObject)).toBe(true);
    expect(has(['n'], testObject)).toBe(true);
    expect(has(['b', 'a'], testObject)).toBe(false);
    expect(has(['b', 'n'], testObject)).toBe(false);

    expect(has(['n'], {})).toBe(false);
    expect(has(['n'], null)).toBe(false);
    expect(has(['n'], undefined)).toBe(false);

    function Foo() {}
    Foo.prototype.a = 1;
    // false для наследуемых свойств
    expect(has(['a'], new Foo())).toBe(false);
    Foo.prototype.hasOwnProperty = null;
    // Должен использоваться hasOwnProperty из Object.prototype с привязкой контекста
    expect(has(['a'], new Foo())).toBe(false);
});
