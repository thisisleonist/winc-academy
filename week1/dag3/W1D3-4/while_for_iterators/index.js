// let myCounter = 0;

// while(myCounter <= 20){
//     if(myCounter %2 === 0){ // even
//         console.log(myCounter + ' is even');
//     }
//     myCounter ++;
// }

// for (let leftNumber = 1; leftNumber <= 10; leftNumber++) {
//     for (let rightNumber = 1; rightNumber <= 10; rightNumber++) {
//         console.log(rightNumber + ' * ' + leftNumber +' = '+ leftNumber * rightNumber);
//     }
// }

const assignGrade = function(theScore){
    if(theScore > 90) return 'A';
    if(theScore > 80) return 'B';
    if(theScore > 70) return 'C';
    if(theScore > 65) return 'D';
    return 'F';
}

for (let grade = 60; grade <= 100; grade++) {
    console.log('For '+grade+', you got a '+assignGrade(grade)+'.');
}