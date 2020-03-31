const log = msg => console.log(msg);

const huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback();
    },1000);  
};

const klaarMetHuiswerk = () => {
    log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
};

huiswerkMaken('wiskunde', klaarMetHuiswerk);

// Let op: de callback aanroepen zonder ()!