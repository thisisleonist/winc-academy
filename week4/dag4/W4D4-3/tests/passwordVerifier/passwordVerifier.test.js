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

const passwords2 = [
    `ziP61@fXj90!jSS44@qKJ70!Zhc09@wHe69!`,
    `XEY79aYuF131npT16aAlS431uGq78aCrN071`,
    `ipt49@HEk29!THI16@aXp16!`,
    `MFf22aVmv831XZl31aVKu161`,
    `iKU09@Pve34!`,
    `hPm21ameu011`,
];

passwords.forEach(password => {
    test(`Password '${password}' is not valid password`, function () {
        expect(passwordVerifier(password)).toBeTruthy();
    });
});

passwords2.forEach(password => {
    test(`Password '${password}' is indeed a valid password`, function () {
        expect(passwordVerifier(password)).toBeTruthy();
    });
});