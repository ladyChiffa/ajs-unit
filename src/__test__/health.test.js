import getHealthStatus from '../health.js';

test('healthStatus, 51', () => {
    const status = getHealthStatus({name: 'Max', health:51});
    expect(status).toBe('healthy');
});

const dataList = [
    [{name: 'Max', health:100}, 'healthy'],
    [{name: 'Max', health:51}, 'healthy'],
    [{name: 'Max', health:50}, 'wounded'],
    [{name: 'Max', health:32}, 'wounded'],
    [{name: 'Max', health:15}, 'wounded'],
    [{name: 'Max', health:14}, 'critical'],
    [{name: 'Max', health:8}, 'critical']
];

test.each(dataList)('testing healthStatus for %s', (myCharacter, status) => {
    const result = getHealthStatus(myCharacter);
    expect(result).toBe(status);
});
