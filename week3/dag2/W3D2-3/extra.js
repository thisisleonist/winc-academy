/*
Exercise 1:
Write a function testNum that takes a number as an argument and
returns a Promise that tests if the value is less than or greater
than the value 10. Log the result to the console.
*/

const log = log => console.log(log);

const testNum = (number) => {
    const max = 10;
    return new Promise((resolve, reject) => {
        if(number < max){
            resolve(`Nope, ${number} is less than ${max}`);
        }else if(number > max){
            resolve(`Yes, ${number} is more than ${max}`);
        }
        reject(`Hmmm, ${number} is neither`);
    });
};

testNum(9)
    .then(result => log(result))
    .catch(result => log(result))
;

testNum(10)
    .then(result => log(result))
    .catch(result => log(result))
;

testNum(11)
    .then(result => log(result))
    .catch(result => log(result))
;

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first
function, makeAllCaps(), will take in an array of words and capitalize
them, and then the second function, sortWords(), will sort the words
in alphabetical order. If the array contains anything but strings,
it should throw an error.
Then call these functions by *chaining* the promises
*/

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

/* call both functions, chain them together and
log the result to the console */

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        const upper = [];
        array.forEach((value, index) => {
            if(typeof(value)!=='string'){
                reject(`Item ${index} ('${value}') is not a string`);
            }else{
                upper.push(value.toUpperCase());
            }
        });
        resolve(upper);
    });
};

// makeAllCaps(arrayOfWords)
//     .then(result => console.log(result))
//     .catch(err => log(err));

// makeAllCaps(complicatedArray)
//     .then(result => console.log(result))
//     .catch(err => log(err));

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        resolve(array.sort());
    });
};

makeAllCaps(arrayOfWords)
    .then(result => {
        log(result);
        sortWords(result)
        .then(result => log(result))
        .catch(err => log(err));
    })
.catch(err => log(err));