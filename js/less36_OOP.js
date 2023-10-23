"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// создаем новый объект и говорим какой у него будет прототип 2-й способ

const jonh = Object.create(soldier);




// const jonh = {
//     health: 100
// };

// Устаревший способ
// jonh.__proto__= soldier;

// Актуальные методы
// установили прототип для jonh от soldier 1-й способ
Object.setPrototypeOf(jonh, soldier);

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();