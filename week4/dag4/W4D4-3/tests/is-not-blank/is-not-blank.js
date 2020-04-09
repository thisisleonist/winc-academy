const isNotBlank = (password) => {
    return password !== '' && password.length !== 0;
};

module.exports = isNotBlank;