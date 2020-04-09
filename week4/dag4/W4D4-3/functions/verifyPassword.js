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
    `Een heel 1ang wachtwoord`
];

const verifyPassword = (password) => passwordVerifier(password);

result = [];
passwords.forEach(password => {
    result.push(verifyPassword(password));
});

console.log(result);