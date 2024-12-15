"use strict"; //чтобы код был современным

const numberOfFilms = +prompt('Сколько фильмо вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastNameMovie = prompt('Один из последних просмотренных фильмов?', ''),
      lastGradeMovie = +prompt('На сколько оцените его?', ''),
      lastNameMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
      lastGradeMovie2 = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastNameMovie] = lastGradeMovie;
personalMovieDB.movies[lastNameMovie2] = lastGradeMovie2;

console.log(personalMovieDB);
