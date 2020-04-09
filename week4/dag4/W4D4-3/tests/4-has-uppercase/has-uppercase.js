const hasUpperCase = (password) => {
    return password.match('(?=.*[A-Z])');
};

module.exports = hasUpperCase;