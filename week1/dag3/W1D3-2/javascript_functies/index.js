// broodjeswinkel

// A

// makeCheeseSandwich
//     Grab a sandwich
//     Put Lurpak on the sandwich
//     Put a slice of old cheese on the sandwich
//     Taste!

// function makeCheeseSandwich(){
//     console.log('Grab a sandwich');
//     console.log('Put Lurpak on the sandwich');
//     console.log('Put a slice of old cheese on the sandwich');
//     console.log('Taste!');
// }

// makeCheeseSandwich();

// B

/**
 * 
 * @param {string; which topping to put on sandwich} topping 
 */
// function makeSandwich(topping){
//     console.log('Grab a sandwich');
//     console.log('Put ' + topping + ' on the sandwich');
//     console.log('There you go, a sandwich with ' + topping);
// }

/**
 * Let’s make a sandwich
 */
// makeSandwich('cheese');

// kassasysteem

// const calculateDiscountedPrice = function(totalAmount, discount){

//     return Math.round(totalAmount - discount);

// };

// console.log(calculateDiscountedPrice(40,13));

const calculateDiscountedPrice2 = function(totalAmount, discount){

    if(totalAmount > 25) return Math.round(totalAmount - discount);
    return totalAmount;

};

console.log(calculateDiscountedPrice2(24,13));