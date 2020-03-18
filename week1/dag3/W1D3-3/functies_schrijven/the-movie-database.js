let myFavoriteMovie = {
        title: 'The Matrix',
        duration: 136,
        stars: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']
};

const printMovieInfo = function(movie){
    return movie.title+' lasts for '+movie.duration+' minutes. Stars: '+movie.stars.join(', ')+'.';
}

console.log(printMovieInfo(myFavoriteMovie));