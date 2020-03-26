// console.log(movies);

const buildMovieItems = () => {
    Array.from(movies.Movies).forEach(metadata => buildMovieItem(metadata));
};

const movieListing = document.getElementById('movie-listing');

const buildMovieItem = metadata => {

    const movieItem = document.createElement("div");
    if(metadata.Type==='movie'){
        movieItem.setAttribute('class', 'movie highlight-movie');
    }else if(metadata.Type==='series'){
        movieItem.setAttribute('class', 'movie highlight-series');
    }
    movieListing.appendChild(movieItem);

    const movieLinkTo = document.createElement("a");
    movieLinkTo.setAttribute('href', 'https://www.imdb.com/title/'+metadata.imdbID+'/');
    movieLinkTo.setAttribute('rel', 'nofollow noopener');
    movieLinkTo.setAttribute('target', '_blank');
    movieItem.appendChild(movieLinkTo);

    const movieImage = document.createElement("img");
    movieImage.setAttribute('src', metadata.Poster);
    movieLinkTo.appendChild(movieImage);

    const movieYear = document.createElement("div");
    movieYear.setAttribute('class', 'year');
    movieYear.innerHTML = metadata.Year;
    movieItem.appendChild(movieYear);

    const movieType = document.createElement("div");
    if(metadata.Type==='movie'){
        movieType.setAttribute('class', 'type type-movie');
    }else if(metadata.Type==='series'){
        movieType.setAttribute('class', 'type type-series');
    }
    movieType.innerHTML = metadata.Type;
    movieYear.appendChild(movieType);

    const movieTitle = document.createElement("div");
    movieTitle.setAttribute('class', 'title');
    movieTitle.innerHTML = metadata.Title;
    movieItem.appendChild(movieTitle);

};

buildMovieItems();

const filterButtons = document.querySelectorAll('#filter-listing label');
// const filterRadioButtons = document.querySelectorAll('#filter-listing input');

const setFilterButtonEvents = () => {
    Array.from(filterButtons).forEach(button => {
        button.addEventListener('click', event => {
            applyFilter(event.toElement.htmlFor);
        });
    });
    // Array.from(filterRadioButtons).forEach(button => {
    //     button.addEventListener('click', event => {
    //         console.log(event);
    //         applyFilter(event.value);
    //     });
    // });
};

setFilterButtonEvents();

const applyFilter = filter => {
    switch(filter){
        case 'latest':
            const latest = Array.from(movies.Movies).filter(movie => {
                return movie.Year >= 2014;
            });
            resetMovieListing();
            latest.forEach(metadata => buildMovieItem(metadata));
            break;
        case 'avengers':
        case 'x-men':
        case 'princess':
        case 'batman':
            filterByTitle(filter);
            break;
    }
};

const filterByTitle = filter => {
    const keywordSearch = Array.from(movies.Movies).filter(movie => {
        return movie.Title.toLowerCase().includes(filter);
    });
    resetMovieListing();
    keywordSearch.forEach(metadata => buildMovieItem(metadata));
};

const resetMovieListing = () => movieListing.innerHTML = '';

const searchField = document.querySelector('#search-form input');

const setSearchFieldEvent = () => {
    searchField.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            performSearch(searchField.value);
        }
    });
};

setSearchFieldEvent();

const performSearch = (searchString) => {
    const searchResult = Array.from(movies.Movies).filter(movie => {
        return (movie.Title+movie.Year+movie.Type).toLowerCase().includes(searchString.toLowerCase());
    });
    resetMovieListing();
    searchResult.forEach(metadata => buildMovieItem(metadata));
};