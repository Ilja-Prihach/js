"use strict"

function showFirstMessage() {
    console.log("Hello world");
}

showFirstMessage();



function showFirstMessage(text) {
    console.log(text);
    let num = 20; //локальная переменная доступна только внутри функции
}

showFirstMessage("Hello world");



function calc (a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(12, 8));
console.log(calc(5, 9));



function ret () {
    let num = 50;
    return(num); //позволяет вернуть локальную переменную в глобальный мир
}

const anotherNum = ret();
console.log(anotherNum);



// функции

// function declaration
// function foo () {
//     код
// }
// Создается до начала выполнения скрипта, можно вызвать перед объявлением

// function expression
// let foo = function() {
//     код
// };
// Создается только тогда, когда доходит поток кода, можно вызвать только после объявления
const logger = function () {
    console.log("Hello");
};
logger();



// Стрелочные функции
// () =>
// Не имеет своего контекста (this)

const calcul = (a, b) => a + b;

