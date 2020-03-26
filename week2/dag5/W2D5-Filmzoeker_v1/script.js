// console.log(movies);

const buildMovieItems = () => {
    Array.from(movies.Movies).forEach(metadata => buildMovieItem(metadata));
};

const movieListing = document.getElementById('movie-listing');

const buildMovieItem = metadata => {
    //console.log(metadata);

    const movieItem = document.createElement("div");
    movieItem.setAttribute('class', 'movie');
    movieListing.appendChild(movieItem);

    const movieImage = document.createElement("img");
    movieImage.setAttribute('src', metadata.Poster);
    movieItem.appendChild(movieImage);

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



