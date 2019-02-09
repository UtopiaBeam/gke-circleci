const lib = require('./lib');

test('pingpong', () => {
    expect(lib.ping()).toBe('pong');
});