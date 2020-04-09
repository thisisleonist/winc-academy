const passwordVerifier = require("./passwordVerifier.js");

const passwords = [
    `henkie1`,
    `1234a`,
    `z`,
    `henkie1234`,
    `HENKhenk`,
    `HENK33$`,
    `1234`,
    ``,
    null
];

passwords.forEach(password => {
    test(`Password '${password}' is not valid password`, function () {
        expect(passwordVerifier(password)).toBeTruthy();
    });
});

passwords.forEach(password => {
    test(`Password '${password}' is not valid password`, function () {
        expect(passwordVerifier(password)).toBeTruthy();
    });
});