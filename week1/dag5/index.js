/**
 * 
 * @param {number 1-10} theNumber 
 * @param {true, false, undefined} theAnswer 
 * 
 */

function changeColor(theNumber,theAnswer){

    //console.log(theAnswer);

    let theElem = document.getElementById('n'+theNumber);

    if(theAnswer===true){
        theElem.className.baseVal = 'green';
    }else if(theAnswer===false){
        theElem.className.baseVal = 'red';
    }else if(theAnswer===undefined){
        theElem.className.baseVal = '';
    }
}

changeColor(6,true);

function changeAllColors(theAnswer){
    for (let theNumber = 1; theNumber <= 10; theNumber++) {
        changeColor(theNumber.toString(),theAnswer);
    }
}

changeAllColors(true);

// EOF
