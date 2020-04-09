const functions = require('./functions.js');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 NOT equal to 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
