// 1

const log = log => console.log(log);

const sum = (...numbers) => {
    return numbers.reduce((prev, current) => {
        return prev + current;
    });
};

log(
    sum(1, 2, 3, 4, 5)
);

// 2

const sum2 = (numbers) => {
    return numbers.reduce((prev, current) => {
        return prev + current;
    });
};

log(
    sum(...[1, 2, 3, 4, 5])
);