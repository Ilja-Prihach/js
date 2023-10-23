// динамическая типизация
// варианты когда что-то превращаем в строку
// To string
// 1) первый и редко используемый способ
console.log(typeof(String(null)));
console.log(typeof(Srtring(4)));

// 2)конкретинация, когда что-то соединяем со строкой
console.log(typeof(5 + ''));


const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number

// 1)
console.log(typeof(Number('4')));

// 2) унарный плюс
console.log(typeof(+ '5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

// Все что мы получаем от пользователя, вегда будет типом данных строка


// To boolean

//  0, null, '', undefiend, NaN   -- всегда будут false
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('3')));

// 3)
console.log(typeof(!!"444444444"));