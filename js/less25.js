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



//Функция для подсчета курсов валют
const usdCurr = 3.3;
const eurCurr = 3.48;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


//Про важность return
const usdtCurr = 3.3;
const discount = 0.9;

function converter (amount, curr) {
    return curr * amount;  //Возвращает результат
}

function promotion(result) {
    console.log(result * discount);
}

//promotion(converter(500, usdtCurr));
//или
const res = converter(500, usdtCurr);
promotion(res);




function test() {
    for (let i = 0; i<5; i++) {
        console.log(i);
        if (i === 3) return //После достижения i===3 функция прекратит выполнение
    }
    console.log('Done'); //не выведет, так как после return выполнения не будет
}
test();



//Функция всегда что-то возвращает, если не указан return
// Всегда возвращает undefiend
function doNothing() {};
console.log(doNothing() === undefined);
//В консоль выведет true





