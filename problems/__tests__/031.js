const hasCircularDependency = require('../031-circular-dependency');

test('Тестирование задачи "031-circular-dependency"', () => {
    expect(hasCircularDependency({})).toBe(false);
    expect(hasCircularDependency({
        http: [],
    })).toBe(false);
    expect(hasCircularDependency({
        http: [],
        apiClient: ['http'],
    })).toBe(false);
    expect(hasCircularDependency({
        http: ['http'],
    })).toBe(true);
    expect(hasCircularDependency({
        http: [],
        apiClient: ['http'],
        weatherService: ['apiClient', 'http'],
        weatherTrackingService: ['weatherService', 'apiClient'],
    })).toBe(false);
    expect(hasCircularDependency({
        http: [],
        apiClient: ['http'],
        weatherService: ['apiClient', 'deliveryService', 'http'],
        weatherTrackingService: ['apiClient', 'weatherService'],
        deliveryService: ['apiClient', 'weatherTrackingService'],
    })).toBe(true);
    expect(hasCircularDependency({
        http: ['catsApi'],
        apiClient: ['http'],
        catsApi: ['apiClient'],
    })).toBe(true);
});
