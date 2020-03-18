/**
 * 
 * @param {number 1-10} theNumber 
 * @param {true, false, undefined} theAnswer 
 * 
 */

function changeColor(theNumber,theAnswer){

    //console.log(theAnswer);

    if(theNumber < 1 || theNumber > 10){
        return false;
    }

    let theElem = document.getElementById('n'+theNumber);

    if(theAnswer===true){
        theElem.className.baseVal = 'green';
    }else if(theAnswer===false){
        theElem.className.baseVal = 'red';
    }else{
        theElem.className.baseVal = '';
    }
    return true;
}

//changeColor(6,true);

function changeColors(theAnswer){
    for (let theNumber = 1; theNumber <= 10; theNumber++) {
        changeColor(theNumber,theAnswer);
    }
    return true;
}

changeColors();

// EOF
