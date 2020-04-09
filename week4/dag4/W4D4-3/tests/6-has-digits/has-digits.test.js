const hasDigits = require("./has-digits.js");

test(`Password 'HENK33$' has one or more digits`, function() {
    const password = 'HENK33$';
    expect(hasDigits(password)).toBeTruthy();
});

test(`Password 'z' has one or more digits`, function() {
    const password = 'z';
    expect(hasDigits(password)).toBeFalsy();
});