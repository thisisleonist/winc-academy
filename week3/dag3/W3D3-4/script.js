const MOVIE_GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const MOVIE_TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const MOVIE_TOP_RATED_GENRE_ACTION_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&with_genres=28';
const MOVIES_FROM_1975_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&year=1975';

const body = document.body;

const getMovieGenres = url => {
    getData(url).then(data => displayMovieGenres(data.genres));
};

const displayMovieGenres = items => {
    const header = document.createElement('h1');
    header.innerHTML = 'Movie Genres with ID';
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    items.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.name} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getASingleMovie = (query, year, isfav) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&year=${year}`;
    getMovieData(url)
    .then(data => {
        if(data.results.length!==0){
            const metadata = data.results[0];
            const id = metadata.id;
            getMovieData(`https://api.themoviedb.org/3/movie/${id}/external_ids?`)
            .then(data => {
                const imdb_id = data.imdb_id;
                getMovieData(`https://api.themoviedb.org/3/find/${imdb_id}?external_source=imdb_id`)
                .then(data => {
                    if(isfav===undefined){
                        isfav = false;
                    }
                    if(isfav===true){
                        displayOneMovie(data.movie_results[0],'Favorite Movie of All Time (from IMDB)');
                    }else{
                        displayOneMovie(data.movie_results[0],'Single Movie in Postman (from IMDB)');
                    }
                });
            });
        }else{
            displayNotFound(query, year);
        }
    });
};

const displayOneMovie = (item, prefix) => {
    const header = document.createElement('h1');
    header.innerHTML = `${prefix}: ${item.title}`;
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    const listitem1 = document.createElement('li');
    listitem1.innerHTML = `ID: ${item.id}`;
    listing.appendChild(listitem1);
    const listitem2 = document.createElement('li');
    listitem2.innerHTML = `Title: ${item.title}`;
    listing.appendChild(listitem2);
    const listitem3 = document.createElement('li');
    listitem3.innerHTML = `Release Date: ${item.release_date}`;
    listing.appendChild(listitem3);
};

const displayNotFound = (query, year) => {
    const header = document.createElement('h1');
    header.innerHTML = `Single Movie in Postman: ${query}`;
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    const listitem1 = document.createElement('li');
    listitem1.innerHTML = `A movie with qeury “${query}” in year ${year} could not be found`;
    listing.appendChild(listitem1);
};

const getTopRated = url => {
    getData(url).then(data => displayTopRated(data));
};

const displayTopRated = items => {
    const header = document.createElement('h1');
    header.innerHTML = 'Top Rated Movies with ID';
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getTopRatedGenreAction = url => {
    getMovieData(url).then(data => displayTopRatedGenreAction(data));
};

const displayTopRatedGenreAction = items => {
    const header = document.createElement('h1');
    header.innerHTML = 'Top Rated Movies in Genre Action with ID';
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getMoviesFrom1975 = url => {
    getMovieData(url).then(data => displayMoviesFrom1975(data));
};

const displayMoviesFrom1975 = items => {
    const header = document.createElement('h1');
    header.innerHTML = 'Movies from 1975 with ID';
    body.appendChild(header);
    const listing = document.createElement('ul');
    body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

getMovieGenres(MOVIE_GENRES_URL);
getASingleMovie('The Lion King', 2019);
getASingleMovie('The Joker', 2019); // not found
getASingleMovie('Toy Story 4', 2019);
getASingleMovie('The Matrix', 1999, true);
getTopRated(MOVIE_TOP_RATED_URL);
getTopRatedGenreAction(MOVIE_TOP_RATED_GENRE_ACTION_URL);
getMoviesFrom1975(MOVIES_FROM_1975_URL);