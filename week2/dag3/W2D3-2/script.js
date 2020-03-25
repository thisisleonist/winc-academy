/**
 * 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 */

console.log('W2D3-2');

//A
const arrayWithWords = ['nice','awesome','tof'];
const addTheWordCool = (item) => arrayWithWords.push(item);
console.log("Add cool:", addTheWordCool('cool'), arrayWithWords);

//B
const amountOfElementsInArray = ['appels', 'peren', 'citroenen'];
const arrayLength = (items) => items.length;
console.log(arrayLength(amountOfElementsInArray));

//C
const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
console.log(selectBelgiumFromBenelux[0]); 

//D
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"]; 
console.log(lastElementInArray[lastElementInArray.length-1]);

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = array => array.slice(1);
console.log(impeachTrumpSlice(presidents), presidents);

// slice returned een aangepaste versie van presidents
// presidents is nog intact

const impeachTrumpSplice = array => array.splice(1) ;
console.log(impeachTrumpSplice(presidents), presidents);
// sPlice returned hetr verwijderde deel van presidents
// presidents is niet intact, maar mist het verwijderde deel

//F
stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const joint = (array) => array.join(' ');
console.log(joint(stringsTogether));

//G
const array1 = ['array1'], array2 = ['array2'];
console.log(array1, array2);
const merger = (array1, array2) => array1.concat(array2);
console.log(merger(array1, array2));