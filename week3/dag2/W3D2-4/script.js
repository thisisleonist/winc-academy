const promisesShouldSucceed = () => Math.round(Math.random());
const randomMilliseconds = () => Math.round(Math.random() * 5000);

const getSucceedingPromise = (message, ms) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, ms);
    });
    return promise;
};

const getFailingPromise = (errorMessage, ms) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(errorMessage);
        }, ms);
    });
    return promise;
};

const getRandomSucceedingOrFailingPromise = id => {
    // This randomly resolves to true or false
    let promiseShouldSucceed = promisesShouldSucceed();

    // This gets some semi-random amound of seconds under the 5seconds:
    let randomMillisecond = randomMilliseconds();

    if (promiseShouldSucceed) {
        return getSucceedingPromise(
            `Promise ${id} succeeded in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    } else {
        return getFailingPromise(
            `Promise ${id} failed in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    }
};

const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
};

const showPromises = promises => {
    console.log("I get called every time a Promise rejects or resolves");
    const promisesDiv = document.querySelector(".promises");
    promisesDiv.innerHTML = "";
    const promisesElements = promises.map(createPromiseElement);
    promisesElements.forEach(element => promisesDiv.appendChild(element));
};

const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    while (i <= 50) {
        let id = i;
        allPromises.push({
            id
        });
        consumePromise(allPromises, id);
        i++;
    }
    showPromises(allPromises);
};

const consumePromise = function(allPromises, id) {
    const promise = getRandomSucceedingOrFailingPromise(id);
    promise
        .then(resolved => {
            allPromises[id].state = "resolved";
            console.log(resolved);
            showPromises(allPromises);
        })
        .catch(errored => {
            allPromises[id].state = "errored";
            console.log(errored);
            showPromises(allPromises);
        });
};

const registerEventHandlers = () => {
    document.querySelector("button").addEventListener("click", add50Promises);
};

document.addEventListener("DOMContentLoaded", () => {
    registerEventHandlers();
});
