// const args1 = function(x){
// 	console.log(arguments);
// };

// const args2 = (x) => {
// 	console.log(arguments);
// };

// args1(1, 2, 3, 4, 5);
// args2(1, 2, 3, 4, 5); // error arguments is not defined

// const test2 = (...y) => {
// 	console.log ( y );
// };

// test2(1, 2, 3, 4, 5);

// const test3 = (a, b, ...z) => {
// 	console.log ( a, b, z );
// };

// test3(1, 2, 3, 4, 5);

// const test4 = function(...a) {
// 	console.log (a);
// };

const test4 = (...args) => { // rest
	console.log (args);
};

test4(...[1, 2, 3, 4, 5],[6, 7, 8, 9, 0]); // spread

// Geeft één array binnen test4()
