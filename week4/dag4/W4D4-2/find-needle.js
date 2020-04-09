const findTheNeedle = function (words, needle) {
    return words.findIndex(word => word===needle);
};

module.exports = findTheNeedle;