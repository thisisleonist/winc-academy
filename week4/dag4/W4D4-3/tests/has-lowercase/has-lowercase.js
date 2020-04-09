const hasLowerCase = (password) => {
    return password.match('(?=.*[a-z])');
};

module.exports = hasLowerCase;