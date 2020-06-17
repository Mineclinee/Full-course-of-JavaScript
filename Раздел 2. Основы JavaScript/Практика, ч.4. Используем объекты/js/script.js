"use strict";

const personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviDB.count = +prompt('Сколько фильмов вы уже смотрели?', "");
    
        while (personalMoviDB.count == '' || personalMoviDB.count == null || isNaN(personalMoviDB.count)) {
            personalMoviDB.count = +prompt('Сколько фильмов вы уже смотрели?', "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMoviDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов', "");
        } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMoviDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoviDB);
        } else {
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMoviDB.privat) {
            personalMoviDB.privat = false;
        } else {
            personalMoviDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номеров ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели, некорректные данные, или не ввели их вообще');
                i--;
            } else {
                personalMoviDB.genres[i - 1] = genre;
            }
        }
        
        personalMoviDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
