/**
 * 
 * @param {*} numberOfChildren 
 * @param {*} partnerName 
 * @param {*} geoLocation 
 * @param {*} jobTitle 
 */

const tellFortune = function(numberOfChildren, partnerName, geoLocation, jobTitle){
    if(numberOfChildren===1){
        return 'You will be a '+jobTitle+' in '+geoLocation+', and married to '+partnerName+' with '+numberOfChildren+' kid.';
    }
    return 'You will be a '+jobTitle+' in '+geoLocation+', and married to '+partnerName+' with '+numberOfChildren+' kids.';
}

console.log(tellFortune(2,'Jessica','Middelharnis','Frontend developer'));
console.log(tellFortune(5,'Jessica','Stellendam','Directeur'));
console.log(tellFortune(1,'Jessica','Sommelsdijk','ZZP-er'));