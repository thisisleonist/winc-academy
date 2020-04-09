const hasDigits = (password) => {
    return password.match('(?=.*[0-9])');
};

module.exports = hasDigits;