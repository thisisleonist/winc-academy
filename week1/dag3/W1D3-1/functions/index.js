function greet1(name, lastname){
    console.log('Hello ' + name + ' ' + lastname);
}

greet1('Leon', 'Rijsdam');

//console.log(greet2);
//greet2();

let greet2 = function(name){
    console.log(name);
};

greet2('Leon');

let runIt = function(a){
    console.log(a);
    a();
};

runIt(
    function run(){
        let b = ' Now';
        console.log('Running' + b);
    }
);

//first class functions (~ hetzelfde als in PHP7)