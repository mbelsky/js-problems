const timeago = require('../024-timeago');

test('Тестирование задачи "024-timeago"', () => {
    expect(timeago(0)).toBe('just now');
    expect(timeago(9)).toBe('just now');

    expect(timeago(10)).toBe('10 seconds ago');
    expect(timeago(19)).toBe('10 seconds ago');
    expect(timeago(20)).toBe('20 seconds ago');
    expect(timeago(29)).toBe('20 seconds ago');
    expect(timeago(59)).toBe('50 seconds ago');

    expect(timeago(60)).toBe('1 minute ago');
    expect(timeago(119)).toBe('1 minute ago');
    expect(timeago(120)).toBe('2 minutes ago');
    expect(timeago(179)).toBe('2 minutes ago');
    expect(timeago(600)).toBe('10 minutes ago');
    expect(timeago(1500)).toBe('25 minutes ago');
    expect(timeago(1800)).toBe('30 minutes ago');
    expect(timeago(2690)).toBe('30 minutes ago');
    expect(timeago(3599)).toBe('30 minutes ago');

    expect(timeago(3600)).toBe('1 hour ago');
    expect(timeago(7199)).toBe('1 hour ago');
    expect(timeago(7200)).toBe('2 hours ago');
    expect(timeago(10799)).toBe('2 hours ago');
    expect(timeago(43200)).toBe('12 hours ago');
    expect(timeago(86399)).toBe('12 hours ago');

    expect(timeago(86400)).toBe('1 day ago');
    expect(timeago(172799)).toBe('1 day ago');
    expect(timeago(172800)).toBe('a few days ago');
    expect(timeago(604799)).toBe('a few days ago');

    expect(timeago(604800)).toBe('1 week ago');
    expect(timeago(1209599)).toBe('1 week ago');
    expect(timeago(1209600)).toBe('2 weeks ago');
    expect(timeago(2419199)).toBe('3 weeks ago');

    expect(timeago(2419200)).toBe('undefined');
});
