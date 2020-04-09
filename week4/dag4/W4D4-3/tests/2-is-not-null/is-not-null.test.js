const isNotNull = require("./is-not-null.js");

test(`Password is null`, function() {
    const password = null;
    expect(isNotNull(password)).toBeFalsy();
});

test(`Password is null`, function() {
    const password = '';
    expect(isNotNull(password)).toBeTruthy();
});