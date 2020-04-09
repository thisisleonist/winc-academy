/**
 * 
 *  @param {*} password 
 * 
 *  RegEx from https://riptutorial.com/regex/example/18996/a-password-containing-at-least-1-uppercase--1-lowercase--1-digit--1-special-character-and-have-a-length-of-at-least-of-10
 
 */

const passwordVerifier = function(password) {
    
    if(password===null || password===undefined){
        return {
            score: 0,
            valid: false
        };
    }
    
    let score = 0;
    const isNotBlank = (password) => {
        return password !== '' && password.length !== 0;
    };
    const isLessThan8Chars = (password) => {
        return password.length < 8;
    };
    const hasUppercase = (password) => {
        return password.match('(?=.*[A-Z])');
    };
    const hasLowercase = (password) => {
        return password.match('(?=.*[a-z])');
    };
    const hasDigit = (password) => {
        return password.match('(?=.*[0-9])');
    };

    if(isNotBlank(password)) score++;
    if(isLessThan8Chars(password)) score--;
    if(hasUppercase(password)) score++;
    if(hasDigit(password)) score++;
    if(hasLowercase(password)) {
        score++;
    } else {
        score = 0;
    }
    return {
        score: score,
        valid: score >= 3
    };
};

const passwords = [
    `henkie1`,
    `1234a`,
    `z`,
    `henkie1234`,
    `HENKhenk`,
    `HENK33$`,
    `1234`,
    ``,
    null,
    `Een heel 1ang wachtwoord`,
    `ziP61@fXj90!jSS44@qKJ70!Zhc09@wHe69!`,
    `XEY79aYuF131npT16aAlS431uGq78aCrN071`,
    `ipt49@HEk29!THI16@aXp16!`,
    `MFf22aVmv831XZl31aVKu161`,
    `iKU09@Pve34!`,
    `hPm21ameu011`,
];

const verifyPassword = (password) => passwordVerifier(password);

result = [];
passwords.forEach(password => {
    result.push({
        password: password,
        result: verifyPassword(password)
    });
});

console.log(result);