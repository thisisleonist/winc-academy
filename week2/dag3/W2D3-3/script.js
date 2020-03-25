// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// console.log('W2D3-3');

// A
// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}
// ];
// const findSpiderMan = function(array){
//     return array.find(element => element.name === 'Spiderman');
// };
// const findSpiderMan2 = function(array){
//     return array.find(function(hero){
//         return hero.name === 'Spiderman';
//     });
// };
// console.log(findSpiderMan(superheroes), findSpiderMan2(superheroes));

// B
// doubleArrayValues = [1, 2, 3];
// const doubler = function(array){
//     return array.map(element => element * 2);
// };
// console.log( doubler(doubleArrayValues) );

// C
// const containsNumberBiggerThan10 = function(items, value){
//     return items.some(
//         item => item >= value
//     );
// };
// console.log( containsNumberBiggerThan10( [1, 4, 3, 6, 9, 7, 11], 10) );

// D
// const isItalyInTheGreat7 = function(items, value){
//     return items.includes(value);
// };
// const isItalyInTheGreat7v2 = (items, value) => items.includes(value);
// console.log( isItalyInTheGreat7(
//     ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'],'Italy')
// );
// console.log( isItalyInTheGreat7v2(
//     ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'],'Italy')
// );

// E
// const tenfold = [1, 4, 3, 6, 9, 7, 11];
// const timesTen = function(array){
//     return array.map(element => element * 10);
// };
// console.log( timesTen(tenfold) );

// F
// isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
// const containsNumberBiggerThan10 = function(items, value){
//     return items.every(
//         item => item < value
//     );
// };
// console.log(containsNumberBiggerThan10(isBelow100, 100));

// G
// bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

// const total = bigSum.reduce((currentsum, arrayitem) => {
//     return arrayitem + currentsum;
// }, 0);

// console.log(total);


const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    console.log("Dit is de gehele persoon:", person);
    console.log('Dit is de naam:', person.name);
    console.log('Dit is het geboortejaar:', 2020 - person.age);
    console.log(person.name + ' is een ' + person.profession);
    if(person.age >= 50){
      console.log(person.name + ' is ouder dan 50');
    }
  }