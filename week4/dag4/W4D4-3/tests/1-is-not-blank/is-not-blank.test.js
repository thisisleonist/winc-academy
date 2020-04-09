const isNotBlank = require("./is-not-blank.js");

test(`Password 'henkie1' is not blank`, function() {
    const password = 'henkie1';
    expect(isNotBlank(password)).toBeTruthy();
});

test(`Password '' is not blank`, function() {
    const password = '';
    expect(isNotBlank(password)).toBeFalsy();
});