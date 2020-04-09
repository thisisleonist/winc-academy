const hasUpperCase = require("./has-uppercase.js");

test(`Password 'henkie1' has one or more upperCase`, function() {
    const password = 'henkie1';
    expect(hasUpperCase(password)).toBeFalsy();
});

test(`Password 'HENKhenk' has one or more upperCase`, function() {
    const password = 'HENKhenk';
    expect(hasUpperCase(password)).toBeTruthy();
});