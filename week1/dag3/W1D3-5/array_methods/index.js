// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//const colors = ['yellow', 'blue', 'red', 'orange'];
// let currentColor = 0;
// while(currentColor < colors.length ){
//     console.log(colors[currentColor]);
//     currentColor++;
// }

// for (let currentColor = 0; currentColor < colors.length; currentColor++) {
//     console.log(colors[currentColor]);
// }

//colors.forEach(element => console.log(element));

// 1. 3 regels
// 2. 1 regel
// 3. Je kunt bij iedere iteratie een function callback uitvoeren

let myObject = {};

let propCount = 1;
while(propCount <= 45 ){
    myObject['property'+propCount]='value'+propCount;
    propCount++;
}

//console.log(myObject);

console.log(Object.values(myObject));

//4. Itereren: ja, maar wel met een compacte schijfwijze