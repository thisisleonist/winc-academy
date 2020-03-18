/**
 * 
 * @param {*} age 
 * 
 */

const calculateDogAge = function(age){
    const conversionRate = 7;
    return 'Your doggie is '+ age * conversionRate +' years old in dog years!';
}

console.log(calculateDogAge(3));

/**
 * 
 * @param {*} age 
 * @param {*} conversionRate 
 * 
 */

const calculateDogAge2 = function(age, conversionRate){
    return 'Your doggie is '+ age * conversionRate +' years old in dog years!';
}

console.log(calculateDogAge2(3,7));