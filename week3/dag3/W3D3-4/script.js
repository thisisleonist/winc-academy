const getMovieGenres = url => {
    getData(url)
    .then(data => displayMovieGenres(data.genres))
    .catch(error => console.log(error));
};

const displayMovieGenres = items => {
    const header = document.createElement('h2');
    header.innerHTML = 'TheMovieDB Genres';
    document.body.appendChild(header);
    const listing = document.createElement('ol');
    document.body.appendChild(listing);
    items.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.name} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getSingleMovie = (query, year, isAllTimeFavorite) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&year=${year}`;
    getMovieData(url)
    .then(data => {
        if(data.results.length!==0){
            const metadata = data.results[0];
            getMovieID(metadata.id, isAllTimeFavorite);
        }else{
            displayNotFound(query, year);
        }
    })
    .catch(error => console.log(error));
};

const getMovieID = (id, isAllTimeFavorite) => {
    getMovieData(`https://api.themoviedb.org/3/movie/${id}/external_ids?`)
    .then(data => {
        getMovieDetails(data.imdb_id, isAllTimeFavorite);
    })
    .catch(error => console.log(error));
};

const getMovieDetails = (id, isAllTimeFavorite) => {
    getMovieData(`https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`)
    .then(data => {
        if(isAllTimeFavorite===undefined || isAllTimeFavorite===false){
            return displayMovieDetails(data.movie_results[0],'Single Movie');
        }
        return displayMovieDetails(data.movie_results[0],'Favorite Movie of All Time');
    })
    .catch(error => console.log(error));
};

const displayMovieDetails = (item, prefix) => {
    const header = document.createElement('h2');
    header.innerHTML = `${prefix}: ${item.title}`;
    document.body.appendChild(header);
    const listing = document.createElement('ul');
    document.body.appendChild(listing);
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
    const header = document.createElement('h2');
    header.innerHTML = `Single Movie in Postman: ${query}`;
    document.body.appendChild(header);
    const listing = document.createElement('ul');
    document.body.appendChild(listing);
    const listitem1 = document.createElement('li');
    listitem1.innerHTML = `A movie with qeury “${query}” in year ${year} could not be found`;
    listing.appendChild(listitem1);
};

const getTopRated = url => {
    getData(url)
    .then(data => displayTopRated(data))
    .catch(error => console.log(error));
};

const displayTopRated = items => {
    const header = document.createElement('h2');
    header.innerHTML = 'Top Rated Movies with ID';
    document.body.appendChild(header);
    const listing = document.createElement('ul');
    document.body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getTopRatedGenreAction = url => {
    getMovieData(url)
    .then(data => displayTopRatedGenreAction(data))
    .catch(error => console.log(error));
};

const displayTopRatedGenreAction = items => {
    const header = document.createElement('h2');
    header.innerHTML = 'Top Rated Movies in Genre Action with ID';
    document.body.appendChild(header);
    const listing = document.createElement('ul');
    document.body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

const getMoviesFrom1975 = url => {
    getMovieData(url)
    .then(data => displayMoviesFrom1975(data))
    .catch(error => console.log(error));
};

const displayMoviesFrom1975 = items => {
    const header = document.createElement('h2');
    header.innerHTML = 'Movies from 1975 with ID';
    document.body.appendChild(header);
    const listing = document.createElement('ul');
    document.body.appendChild(listing);
    items.results.forEach(item => {
        let listitem = document.createElement('li');
        listitem.innerHTML = `${item.title} (id: ${item.id})`;
        listing.appendChild(listitem);
        listitem = '';
    });
};

getMovieGenres(API_BASE_URL + '/genre/movie/list');
getSingleMovie('The Lion King', 2019);
getSingleMovie('Toy Story 4', 2019);
 // not found!
getSingleMovie('The Joker', 2019);
// all time favorite
getSingleMovie('The Matrix', 1999, true);
getTopRated(API_BASE_URL + '/movie/top_rated');
getTopRatedGenreAction(API_BASE_URL + '/discover/movie?sort_by=popularity.desc&page=1&with_genres=28');
getMoviesFrom1975(API_BASE_URL + '/discover/movie?sort_by=popularity.desc&page=1&year=1975');