/**
 * Korte versie van console.log: log()
 * Voordeel 1: alleen log() typen
 * Voordeel 2: alle console.log() items uitschakelen
 * door console.log in log() functie te escapen :)
*/

const log = msg => {
    console.log(msg);
};

log("He hallo, ik ben eerste");

setTimeout(() => {
    log("He hallo, ik ben tweede");
}, 2000);

log("He hallo, ik ben derde");

// 1: 
// 2:
// 3: Eerste, derde en dan tweede
// 4: Klopt! :)