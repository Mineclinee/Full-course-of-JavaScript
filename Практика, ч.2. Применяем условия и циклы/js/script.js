"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', "");

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних     просмотренных фильмов?', ""),
          b = prompt('На сколько оцените его?', "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        i--;
    }              
}

if (personalMoviDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов', "");
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMoviDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

while (personalMoviDB.movies < 2) {
    const a = prompt('Один из последних     просмотренных фильмов?', ""),
          b = prompt('На сколько оцените его?', "");

          personalMoviDB.movies[a] = b;
}


