const hasLessThan8Chars = require("./has-less-than-8chars.js");

test(`Password 'henkie1' < 8 characters`, function() {
    const password = 'henkie1';
    expect(hasLessThan8Chars(password)).toBeTruthy();
});

test(`Password 'henkie1234' < 8 characters`, function() {
    const password = 'henkie1234';
    expect(hasLessThan8Chars(password)).toBeFalsy();
});