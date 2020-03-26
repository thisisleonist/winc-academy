// console.log(movies);

const buildMovieItems = () => {
    Array.from(movies.Movies).forEach(metadata => buildMovieItem(metadata));
};

const movieListing = document.getElementById('movie-listing');

const buildMovieItem = metadata => {
    //console.log(metadata);

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

const setFilterButtonEvents = () => {
    Array.from(filterButtons).forEach(button => {
        button.addEventListener('click', event => {
            applyFilter(event.toElement.htmlFor);
        });
    });
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
            const avengers = Array.from(movies.Movies).filter(movie => {
                return movie.Title.includes('Avengers');
            });
            resetMovieListing();
            avengers.forEach(metadata => buildMovieItem(metadata));
            break;
        case 'xmen':
            const xmen = Array.from(movies.Movies).filter(movie => {
                return movie.Title.includes('X-Men');
            });
            resetMovieListing();
            xmen.forEach(metadata => buildMovieItem(metadata));
            break;
        case 'princess':
            const princess = Array.from(movies.Movies).filter(movie => {
                return movie.Title.includes('Princess');
            });
            resetMovieListing();
            princess.forEach(metadata => buildMovieItem(metadata));
            break;
        case 'batman':
            const batman = Array.from(movies.Movies).filter(movie => {
                return movie.Title.includes('Batman');
            });
            resetMovieListing();
            batman.forEach(metadata => buildMovieItem(metadata));
            break;
    }
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
        return (movie.Title).toLowerCase().includes(searchString.toLowerCase());
    });
    resetMovieListing();
    searchResult.forEach(metadata => buildMovieItem(metadata));
};