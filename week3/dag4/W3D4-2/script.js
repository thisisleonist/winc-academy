const log = log => console.log(log);

const getData = async (apiUrl,headers) => {
    try {
        const result = await fetch(apiUrl, {
            method: "GET",
            headers: headers
        });
        const data = await result.json();
        return data;
    } catch (error) {
        log(error);
    }
};

const getRandomJoke = () => {
    headers = {
        'Accept': 'application/json'
    };
    getData("https://icanhazdadjoke.com/", headers).then(data =>
        displayRandomJoke(data.joke)
    );
};

const displayRandomJoke = (joke) => {
    const box = document.getElementById("box");
    box.innerHTML = '';
    let paragraph = document.createElement("p");
    paragraph.setAttribute("class", "tweet");
    paragraph.innerHTML = joke;
    box.appendChild(paragraph);
};


const grapButton = document.getElementById('grap');
grapButton.addEventListener('click',() =>{
    getRandomJoke();
});

const getRandomTweet = () => {
    getData("https://tronalddump.io/random/quote").then(data =>
        displayRandomTweet(data.tags[0], data.value)
    );
};

const displayRandomTweet = (tag, quote) => {
    const box = document.getElementById("box");
    box.innerHTML = '';
    let paragraph = document.createElement("p");
    paragraph.setAttribute("class", "tweet");
    paragraph.innerHTML = quote;
    box.appendChild(paragraph);
};

const tweetButton = document.getElementById('tweet');
tweetButton.addEventListener('click',() =>{
    getRandomTweet();
});

const getPokemon = () => {
    headers = {
        'Accept': 'application/json'
    };
    getData("https://pokeapi.co/api/v2/pokemon/ditto/", headers).then(data =>
        displayRandomJoke(data.joke)
    );
};


const pokemonButton = document.getElementById('pokemon');
pokemonButton.addEventListener('click',() =>{
    alert('Pokemon komt hier');
});
