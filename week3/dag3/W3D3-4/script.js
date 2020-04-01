const MOVIE_GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const body = document.body;

// const getMovieGenres = url => {
//     getData(url).then(data => buildMovieGenres(data.genres));
// };

// const buildMovieGenres = items => {
//     const header = document.createElement('h1');
//     header.innerHTML = 'Movie Genres with ID';
//     body.appendChild(header);
//     const listing = document.createElement('ul');
//     body.appendChild(listing);
//     items.forEach(item => {
//         let listitem = document.createElement('li');
//         listitem.innerHTML = `${item.name} (id: ${item.id})`;
//         listing.appendChild(listitem);
//         listitem = '';
//     });
// };

// getMovieGenres(MOVIE_GENRES_URL);

const getOneMovie = query => {
    getMovieData(`https://api.themoviedb.org/3/search/movie?query=${query}`)
    .then(data => {
        metadata = data.results[0];
        id = metadata.id;
        getMovieData(`https://api.themoviedb.org/3/movie/${id}/external_ids?`)
        .then(data => {
            imdb_id = data.imdb_id;
            getMovieData(`https://api.themoviedb.org/3/find/${imdb_id}?external_source=imdb_id`)
            .then(data => {
                console.log(data.movie_results[0]);
                buildOneMovie(data.movie_results[0]);
            });
        });
    });
};

const buildOneMovie = item => {
    const header = document.createElement('h1');
    header.innerHTML = `One Movie: ${item.title} (id: ${item.id})`;
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    const keys = [];
    let listitem = document.createElement('li');
    listitem.innerHTML = `${item.title} (id: ${item.id})`;
    listing.appendChild(listitem);
};

getOneMovie('The Matrix');

// const getSingleMovie = (url,) => {
//     getMovieData(`${url}?query=The,Lion,King&year=2019`).then(data => {
//         buildSingleMovie(data.results[0]);
//     });
// };

// const buildSingleMovie = item => {
//     const header = document.createElement('h1');
//     header.innerHTML = ` ${item.title} ${item.year}`;
//     body.appendChild(header);
//     const listing = document.createElement('ul');
//     body.appendChild(listing);
//     let listitem = document.createElement('li');
//     listitem.innerHTML = `${item.title} (id: ${item.id})`;
//     listing.appendChild(listitem);
// };

// getSingleMovie();



//https://api.themoviedb.org/3/search/movie?api_key=79c1f23d5822955801447c6490744b56&