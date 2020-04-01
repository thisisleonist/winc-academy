const log = log => console.log(log);

const sum = (...numbers) => {
    return numbers.reduce((prev, current) => {
        return prev + current;
    });
};

log(sum(1, 2, 3, 4, 5));

log(sum(...[1, 2]));