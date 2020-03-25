const items = [
    { name: 'Bike',     price: 100,  bool:true },
    { name: 'TV',       price: 200,  bool:true },
    { name: 'Album',    price: 10,   bool:true },
    { name: 'Book',     price: 5,    bool:true },
    { name: 'Phone',    price: 500,  bool:true },
    { name: 'Computer', price: 1000, bool:true },
    { name: 'Keyboard', price: 25,   bool:true }
];

const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

// console.log(items);
// console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.price;
});

// console.log(itemNames);

const foundItems = items.find((item) => {
    return item.name === 'Album';
});

// console.log(foundItems);

// items.forEach((item) => {
//     console.log(item.price);
// });

const hasInexpensiveItems = items.some((item) => {
    return item.bool === true;
});

console.log ( hasInexpensiveItems );

const hasInexpensiveItems2 = items.every((item) => {
    return item.price <= 1000;
});

// console.log ( hasInexpensiveItems2 );

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

// console.log( total );

const items2 = [1, 2, 3, 4, 5];

const includesTwo = items2.includes(2);

// console.log( includesTwo );