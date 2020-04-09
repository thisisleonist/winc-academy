const passwordVerifier = function(password) {
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
    if(isLessThan8Chars(password)) score++;
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

module.exports = passwordVerifier;