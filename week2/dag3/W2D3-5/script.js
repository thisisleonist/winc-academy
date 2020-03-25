// JSON: JavaScript Object Notation

const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];

// 1

const namesOf = function(array){
    return array.map(items => items.name);
};

// console.log(namesOf(superheroes));

// 2
const onlyLight = function(array){
    return array.filter(items => parseInt(items.weight) < 190);
};

// console.log(onlyLight(superheroes));


// 3
const onlyNamesOfHeavy = function(array){
    return array.filter(items => parseInt(items.weight) === 200)
                .map(items => items.name);
};

// console.log(onlyNamesOfHeavy(superheroes));

// 4
const firstAppearanceOf = function(array){
    return array.map(items => [items.name, items.first_appearance]);
};

//console.log(firstAppearanceOf(superheroes));

// 5

const onlyDcComics = function(array, pub){
    return array.filter(items => items.publisher === pub)
                .map(items => items.name);
};

// console.log(onlyDcComics(superheroes, 'DC Comics'));
// console.log(onlyDcComics(superheroes, 'Marvel Comics'));


// 6 en 7
const combinedWeightOf = function(array, pub){
    const arrayFromPub =
        array.filter(items => items.publisher === pub)
             .map(items => isNaN(parseInt(items.weight)) ? 0 : parseInt(items.weight));

    const total = arrayFromPub.reduce((csum, item) => {
        return item + csum;
    }, 0);
    return total;
};

// console.log(combinedWeightOf(superheroes, 'DC Comics'));
// console.log(combinedWeightOf(superheroes, 'Marvel Comics'));

// 8

const weightOf = function(array){
    heroes = array.map(items => [
        items.name,
        isNaN(parseInt(items.weight)) ? 0 : parseInt(items.weight)
    ]);
    heroes.sort(function (a, b) {
        return b[1] - a[1];
    });
    return heroes[0];
};

console.log(weightOf(superheroes));