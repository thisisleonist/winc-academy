const age = 42;
const isFemale = false;
const driverStatus = 'bob';
const name = 'Leon';
const totalAmount = 100.00;

if(age >= 18){
    console.log('You may enter!');
} else {
    console.log('You may NOT enter!');
}

if(isFemale === true){
    console.log('You are a female');
} else {
    console.log('You are NOT a female!');
}

if(driverStatus === 'bob'){
    console.log('Jammer joh, jij bent de ‘bob’!');
} else {
    console.log('Neem er nog een!');
}

if(age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}else{
    console.log("Sorry maat, voor jou het volle pond!");
}

if(name === 'Bram' || name === 'Sarah'){
    console.log("Hier, een gratis biertje!");
}else{
    console.log("Helaas, alleen Brammen en Sarahs komen in aanmerking.");
}

/**
 * onderstaande vergelijking kan inderdaad makkelijker
 * door met het hoogste bedrag te beginnen
*/

if(totalAmount >= 25 && totalAmount < 50){
    console.log("Gratis bitterballen on the house!");
}else if(totalAmount >= 50 && totalAmount < 100){
    console.log("Een gratis portie nachos on the house!");
}else if(totalAmount >= 100){
    console.log("Een gratis flesje champagne on the house!");
}else{
    console.log("Jammer!");
}

if(totalAmount >= 100){
    console.log("Een gratis flesje champagne on the house!");
}else if(totalAmount > 50){
    console.log("Een gratis portie nachos on the house!");
}else if(totalAmount > 25){
    console.log("Gratis bitterballen on the house!");
}else{
    console.log("Jammer!");
}

console.log(typeof(totalAmount));