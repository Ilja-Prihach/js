"use strict";

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 1500);
}

function second() {
    console.log(2);
}

first();
second();

// callback это функция которая должна быть выполнена после того, как выполнится другая функция

function learnJS(lang, callback) {
    console.log(`Я учу язык ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);