const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmsTitles = function () {
  return this.films.map((film) => film.title);
};

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre);
};

Cinema.prototype.getTotalTimeOfAllFilms = function () {
  return this.films.reduce((acc, films) => acc + films.length, 0);
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find((film) => film.title === title);
};

Cinema.prototype.areFilmsFromYear = function (year) {
  return this.films.some((film) => film.year);
};

Cinema.prototype.noFilmsFromYear = function (year) {
  return this.films.every((film) => film.year !== year);
};

Cinema.prototype.areAllFilmsOverRunningTime = function (length) {
  return this.films.every((film) => film.length > length);
};
