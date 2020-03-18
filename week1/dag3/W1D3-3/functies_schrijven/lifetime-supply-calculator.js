

const calculateSupply = function(age, amountPerDay){
    
    const maxAge = 88;
    const totalNeeded = Math.round(amountPerDay * 365 * (maxAge - age));
    return 'You will need '+totalNeeded+' carrots to last you until the ripe old age of '+maxAge;

}

console.log(calculateSupply(42, 3));
console.log(calculateSupply(24, 3.3));
console.log(calculateSupply(36.5, 12.6));