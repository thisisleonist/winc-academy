const movieListing = document.getElementById('movie-listing');

/**
 *
 *  @param {object} metadata: The metadata for a single movie
 *  Builds one item in the movie listing
 *
 */

const buildMovieItem = metadata => {
  // create the item
  const movieItem = document.createElement('div');
  if (metadata.Type === 'movie') {
    movieItem.setAttribute('class', 'movie highlight-movie');
  } else if (metadata.Type === 'series') {
    movieItem.setAttribute('class', 'movie highlight-series');
  }
  movieListing.appendChild(movieItem);

  // add a link to imdb
  const movieLinkTo = document.createElement('a');
  movieLinkTo.setAttribute(
    'href',
    'https://www.imdb.com/title/' + metadata.imdbID + '/'
  );
  movieLinkTo.setAttribute('rel', 'nofollow noopener');
  movieLinkTo.setAttribute('target', '_blank');
  movieItem.appendChild(movieLinkTo);

  // add the image to the link
  const movieImage = document.createElement('img');
  movieImage.setAttribute('src', metadata.Poster);
  movieLinkTo.appendChild(movieImage);

  // add movie year below image
  const movieYear = document.createElement('div');
  movieYear.setAttribute('class', 'year');
  movieYear.innerHTML = metadata.Year;
  movieItem.appendChild(movieYear);

  // add movie or series label to the right of year
  const movieType = document.createElement('div');
  if (metadata.Type === 'movie') {
    movieType.setAttribute('class', 'type type-movie');
  } else if (metadata.Type === 'series') {
    movieType.setAttribute('class', 'type type-series');
  }
  movieType.innerHTML = metadata.Type;
  movieYear.appendChild(movieType);

  // add the title to the item
  const movieTitle = document.createElement('div');
  movieTitle.setAttribute('class', 'title');
  movieTitle.innerHTML = metadata.Title;
  movieItem.appendChild(movieTitle);
};

/**
 *
 *  Builds the initial movie listing with all movies
 *  (There are 35 items in the database, currently
 *     shown in rows of 5 with CSS grid)
 *
 */

const buildAllMovieItems = () => {
  Array.from(movies.Movies).forEach(metadata => (buildMovieItem(metadata)));
};

/**
 *
 *  Set the eventListeners on the radio butttons and the labels
 *  Setting an eventListener on a label eases navigation for the user
 * 
 *  An additional eventListener for the radio button is needed because
 *  there is no ‘click-through’ behavior (maybe in a future revision)
 *
 */

const filterButtons = document.querySelectorAll('#filter-listing label');
const filterRadioButtons = document.querySelectorAll('#filter-listing input');

const setFilterButtonEvents = () => {
  Array.from(filterRadioButtons).forEach(button => {
    button.addEventListener('click', event => {
      // toElement.id =>  radio button element id
      applyFilter(event.toElement.id);
    });
  });
  Array.from(filterButtons).forEach(button => {
    button.addEventListener('click', event => {
      // toElement.htmlFor =>  label element for attribute value
      applyFilter(event.toElement.htmlFor);
    });
  });
};

/**
 *
 *  @param {string} filter: The filter to apply to the movie listing
 *  Uses a switch statement for clarity; the last 4 filters use the
 *  same subfunction and parameter, so the case statements can be
 *  combined as they need only one reference to filterByTitle()
 *
 */

const applyFilter = filter => {
  switch (filter) {
    case 'latest':
      filterByYear(filter);
      break;
    case 'avengers':
    case 'x-men':
    case 'princess':
    case 'batman':
      filterByTitle(filter);
      break;
  }
};

/**
 *
 *  @param {string} filter: Filters the movie listing by 2014 and newer
 * 
 *  A perfect approach would be to filter by range of years, as some
 *  movies have a range such as 1961-1969. However, looking at the current
 *  database no recent movies fall into this category. We can avoid the
 *  additional coding for now.
 *
 */

const filterByYear = filter => {
  const latest = Array.from(movies.Movies).filter(movie => {
    return movie.Year >= 2014;
  });
  resetMovieListing();
  latest.forEach(metadata => buildMovieItem(metadata));
};

/**
 *
 *  @param {string} filter: Filters the movie listing by title
 *  All titles are changed to lowerCase first and then searched
 *
 */

const filterByTitle = filter => {
  const keywordSearch = Array.from(movies.Movies).filter(movie => {
    return movie.Title.toLowerCase().includes(filter);
  });
  resetMovieListing();
  keywordSearch.forEach(metadata => buildMovieItem(metadata));
};

/**
 *
 *  Resets the movie listing by clearing the inner HTML
 *
 */

const resetMovieListing = () => movieListing.innerHTML = '';

/**
 *
 *  Sets the eventListener (return key = 13) that performs
 *  the search based on the user input string
 *
 */

const searchField = document.querySelector('#search-form input');

const setSearchFieldEvent = () => {
  searchField.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      // searchField.value => user input string
      performSearch(searchField.value);
    }
  });
};

/**
 *
 *  @param {string} searchString: The user input string
 *  Performs the search based on the user input string
 *  The metadata title, year and type are concatenated into
 *  one string and changed to lowerCase; the user input
 *  string is also changed to lowerCase so we can perform
 *  a case insensitive search
 *
 */

const performSearch = searchString => {
  Array.from(filterRadioButtons).forEach(button => {
    button.checked = false;
  });
  const searchResult = Array.from(movies.Movies).filter(movie => {
    return (movie.Title + movie.Year + movie.Type)
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });
  resetMovieListing();
  searchResult.forEach(metadata => buildMovieItem(metadata));
};

const initMovieSearcher = () => {
  buildAllMovieItems();
  setFilterButtonEvents();
  setSearchFieldEvent();
};

initMovieSearcher();

// EOF
