const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(){
  let titles = this.films.map((film) => {
    return film.title
  });
  return titles
};

Cinema.prototype.getFilmByGenre = function(genre){
  let filmsByGenre = this.films.filter((film) => {
    return film.genre === genre
  });
  return filmsByGenre
};

Cinema.prototype.getFilmByTitle = function(title){
  let filmsOfTitle = this.films.filter((film) => {
    return film.title === title
  });
  return filmsOfTitle
};

Cinema.prototype.filmsMadeThatYear = function(date){
  let filmsOfYear = this.films.some((film) => {
    return film.year === date
  });
  return filmsOfYear
};

module.exports = Cinema;
