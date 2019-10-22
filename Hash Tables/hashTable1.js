function inflightMovies(flightLength, movieLengths) {

    const movieLengthsSeen = new Set();

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i];

        const matchingSecondMovieLength = flightLength - firstMovieLength;

        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
    }
    return false;
}

const movieLengths = [5, 4, 3, 2, 1];
console.log(inflightMovies(12, movieLengths));