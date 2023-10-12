"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);




const obj = {
    a: 5,
    b: 1
};

const copya = obj; //здесь передается значение по ссылке и модифицируя copy, модифицируется и obj

copya.a = 10;
console.log(copy);
console.log(obj);


//способы чтобы создать копию объекта, а не передать ссылку на него
// 1 можно использовать цикл
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

// 2)  .assign()
const add = {
    d: 17,
    e: 20
};

const clonAdd = Object.assign({}, add);
console.log(clonAdd);

clonAdd.d = 18;
console.log(clonAdd);
console.log(add);

// копия массива 
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'qweerty';
console.log(newArray);
console.log(oldArray);


// для стандарта ES6 
// Поверхностная копия

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);      



function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// copy array через spred operator
const array = ["a", "b"];
const copyArrays = [...array];

// copy object throught spred operator
const q = {
    one: 1,
    two: 2
};
const copyQ = {...q};
copyQ.one = 123;
console.log(copyQ);
console.log(q);