const log = msg => console.log(msg);

log("He hallo, ik ben eerste");

setTimeout(() => {
    log("He hallo, ik ben tweede");
}, 2000);

log("He hallo, ik ben derde");

// 1: 
// 2:
// 3: Eerste, derde en dan tweede
// 4: Klopt! :)