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
];

passwords.forEach(password => {
    test(`Password '${password}' is not valid password`, function () {
        expect(passwordVerifier(password)).toBeTruthy();
    });
});