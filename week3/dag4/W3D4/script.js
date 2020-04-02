/**
 * 
 *  @param {number} a 
 *  @param {number} b 
 *  sortAscending is a subfunction of Array.sort()
 *  and sorts the array from A to Z
 * 
 */

const sortAscending = (a, b) => {
    if (a < b) {
        return -1;
    }else if (a > b) {
        return 1;
    } else {
        return 0;
    }
};

/**
 * 
 *  @param {number} a 
 *  @param {number} b 
 *  sortDescending is a subfunction of Array.sort()
 *  and sorts the array from Z to A
 * 
 */

const sortDescending = (a, b) => {
    if (a < b) {
        return 1;
    }else if (a > b) {
        return -1;
    } else {
        return 0;
    }
};

const countryButton = document.getElementById('country');
const resultContainer = document.getElementById('result');

const setCountryButtonListener = () => {
    countryButton.addEventListener('click', () => {
        displayCountryList();
    });
};

setCountryButtonListener();

const getCountryList = () => {
    const regions = [];
    randomPersonData.forEach((item, index) => {
        if(regions.indexOf(item.region)===-1){
            regions.push(item.region);
        }
    });
    return regions;
};

const displayCountryList = () => {

    resultContainer.innerHTML = '';
    const listing = document.createElement('ul');
    resultContainer.appendChild(listing);

    getCountryList().sort((a, b) => {
        return sortAscending(a, b);
    }).forEach(item => {
        const listitem = document.createElement('li');
        listitem.innerHTML = item;
        listing.appendChild(listitem);    
    });
    
};

const capricornButton = document.getElementById('capricorn');

const setCapricornButtonListener = () => {
    capricornButton.addEventListener('click', () => {
        displayCapricornList();
    });
};

setCapricornButtonListener();

const getCapricornWomen = () => {
    const capricorns = [];
    randomPersonData.forEach((item, index) => {
        let birthMonth = new Date(item.birthday.raw * 1000).getMonth()+1;
        if(
            (birthMonth===12 || birthMonth===1) &&
            item.gender==='female' &&
            item.age >= 30 // ouder dan 30 gekozen, anders geen resultaat
        ){
            capricorns.push({
                name: item.name,
                surname: item.surname,
                photo: item.photo
            });
        }
    });
    return capricorns;
};

const displayCapricornList = () => {

    resultContainer.innerHTML = '';
    const listing = document.createElement('ul');
    resultContainer.appendChild(listing);

    getCapricornWomen()
    .sort((a, b) => {        
        const valueA = a.name.toUpperCase();
        const valueB = b.name.toUpperCase();
        return (valueA < valueB) ? -1 : (valueA > valueB) ? 1 : 0;
    })
    .forEach(item => {
        const listitem = document.createElement('li');
        listitem.innerHTML = item.name + ' ' + item.surname;
        listing.appendChild(listitem);
        const br = document.createElement('br');
        listitem.appendChild(br);
        //const image = document.createElement('img');
        //image.setAttribute('alt', '(' + item.photo + ')');
        listitem.innerHTML += item.photo;
        //listitem.appendChild(image);
    });

};

const oldCreditcardsButton = document.getElementById('creditcard');

const setOldCreditcardsButtonListener = () => {
    oldCreditcardsButton.addEventListener('click', () => {
        displayOldCreditcardList();
    });
};

setOldCreditcardsButtonListener();

const getOldCreditcardList = () => {

    const creditcards = [];
    randomPersonData.forEach((item, index) => {
        
        let expiration = item.credit_card.expiration.split('/');
        let expires = new Date('20' + expiration[1], expiration[0]-1, 1);
        
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() +1;

        expiresNextMonth = new Date(currentYear, currentMonth+1, 0);
        expiresThisMonth = new Date(currentYear, currentMonth, 0);

        // expires Y + 1 (2021) gekozen, anders geen resultaat
        if(
            item.age >= 18 &&
            ( expires.getMonth() === expiresThisMonth.getMonth() ||
              expires.getMonth() === expiresNextMonth.getMonth()
            ) &&
            ( expires.getFullYear() === expiresThisMonth.getFullYear() +1 ||
              expires.getFullYear() === expiresNextMonth.getFullYear() +1
            )
        ){
            creditcards.push({
                name: item.name,
                surname: item.surname,
                phone: item.phone,
                number: item.credit_card.number,
                expiration: item.credit_card.expiration,
                date: expires
            });
        }
    });
    return creditcards;
};

const displayOldCreditcardList = () => {

    resultContainer.innerHTML = '';
    const listing = document.createElement('ul');
    resultContainer.appendChild(listing);

    getOldCreditcardList()
    .sort((a, b) => {        
        const valueA = a.date;
        const valueB = b.date;
        return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
    })
    .forEach(item => {
        const listitem = document.createElement('li');
        listitem.innerHTML = item.name + ' ' + item.surname;
        listing.appendChild(listitem);
        const br1 = document.createElement('br');
        listitem.appendChild(br1);
        listitem.innerHTML += 'Phone: ' + item.phone;
        const br2 = document.createElement('br');
        listitem.appendChild(br2);
        listitem.innerHTML += 'Card: ' + item.number;
        const br3 = document.createElement('br');
        listitem.appendChild(br3);
        listitem.innerHTML += 'Expires: ' + item.expiration;
        const br4 = document.createElement('br');
        listitem.appendChild(br4);
    });

};

const mostPeopleButton = document.getElementById('mostpeople');

const setMostPeopleButtonListener = () => {
    mostPeopleButton.addEventListener('click', () => {
        displayMostPeopleList();
    });
};

setMostPeopleButtonListener();

const getMostPeople = () => {
    const regions = [];
    randomPersonData.forEach((item, index) => {
        if(regions.indexOf(item.region)===-1){
            regions.push(item.region);
        }
    });
    const regionsWithCount = [];
    regions.forEach((item, index) => {
        let inRegion = randomPersonData.filter(row =>{
            return row.region === item;
        });
        regionsWithCount.push({item, count: inRegion.length});
    });

    return regionsWithCount;
};

const displayMostPeopleList = () => {

    resultContainer.innerHTML = '';
    const listing = document.createElement('ul');
    resultContainer.appendChild(listing);

    // sort by count and subsort equal count by name!
    getMostPeople()
    // sort by name ascending
    .sort((a, b) => {        
        const valueA = a.item;
        const valueB = b.item;
        return (valueA < valueB) ? -1 : (valueA > valueB) ? 1 : 0;
    })
    // sort by count descending
    .sort((a, b) => {        
        const valueA = a.count;
        const valueB = b.count;
        return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
    })
    .forEach(item => {
        const listitem = document.createElement('li');
        listitem.innerHTML = item.item + ': ' + item.count;
        listing.appendChild(listitem);
    });

};

const averageAgeButton = document.getElementById('averageage');

const setAverageAgeButtonListener = () => {
    averageAgeButton.addEventListener('click', () => {
        displayCountryButtons();
    });
};

setAverageAgeButtonListener();

const displayCountryButtons = () => {

    resultContainer.innerHTML = '';
    let listing = document.createElement('ul');
    resultContainer.appendChild(listing);

    getCountryList().sort((a, b) => {
        return sortAscending(a, b);
    }).forEach(item => {
        let listitem = document.createElement('li');
        listitem.setAttribute('class','listitem');
        listing.appendChild(listitem);
        let button = document.createElement('button');
        button.innerHTML = item;
        button.setAttribute('value',item);
        listitem.appendChild(button);

        button.addEventListener('click', (item) => {
            displayMessage(item.srcElement.value);
        });
    });

    let message = document.createElement('span');
    message.setAttribute('id','message');
    resultContainer.appendChild(message);
    
};

const displayMessage = item => {
    const people = randomPersonData.filter(row => {
        return row.region === item;
    });
    const count = people.length;
    let total = 0;
    people.forEach((item, index) => {
        total += item.age;
    });
    const average = Math.round(total / count);
    const messsage = document.getElementById('message');
    messsage.innerHTML = `The average person in ${item} is ${average} years old`;

};