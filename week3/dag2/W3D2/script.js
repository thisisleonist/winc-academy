const log = msg => console.log(msg);

const p = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 500);
    //reject('Error');
});

p.then(() => {
    log('THEN');
});

log(p);