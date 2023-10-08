"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//Деструктуризация
const {border, bg} = options.colors;



// Подсчет элементов в объекте
console.log(Object.keys(options));//Получаем массив
console.log(Object.keys(options).length); //Получаем количество элементов


console.log(options.name);

// delete options.name; //удаляет свойство из объекта
// console.log(options);


// Для перебора свойств объекта for in
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);