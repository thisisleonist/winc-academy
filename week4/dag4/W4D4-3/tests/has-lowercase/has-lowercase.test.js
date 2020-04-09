const hasLowerCase = require("./has-lowercase.js");

test(`Password 'henkie1' has one or more lowerCase`, function() {
    const password = 'henkie1';
    expect(hasLowerCase(password)).toBeTruthy();
});

test(`Password 'HENKhenk' has one or more lowerCase`, function() {
    const password = 'HENKhenk';
    expect(hasLowerCase(password)).toBeTruthy();
});

test(`Password 'HENK33$' has one or more lowerCase`, function() {
    const password = 'HENK33$';
    expect(hasLowerCase(password)).toBeFalsy();
});