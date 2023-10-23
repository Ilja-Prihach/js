"use strict"
// Массив это структура, которая содержит элементы по порядку

const arr = [1, 2, 3, 6, 8];

//forEach
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


// for of для пребора массива, работает только с массивоподобными сущностями(массив, строка, псевдомассивы, и сущности как map и sеt)
for (let value of arr) {
    console.log(value);
}

//Перебор массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


arr.pop(); //удаляет послкдний элемент массива
arr.push(10); //Добовляет элемент в конец массива

console.log(arr);