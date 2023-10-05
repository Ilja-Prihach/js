// Методы и свойства строк и чисел

//Методы это вспомогательные функции
//Свойства это вспомогательные значения


//Строки
const stroka = "test";
const arr = [1, 2, 4];

//свойства
console.log(arr.length); // выведет количество элементов массива
console.log(stroka.length); //выведет длину строки


//методы

const str = "test";
console.log(str.toUpperCase());//перводит в верхн регистр
console.log(str.toLowerCase());//перводит в нижн регистр

//Метод который позволяет найти часть строки и с какого символа она начинается или поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));



const logg = "Hello world";
console.log(logg.substr(6, 4)); // срез строки с какого символа и сколько символов вырезать
console.log(logg.substring(6, 11)); //так же получаем часть строки с 6 по 11 символ
console.log(logg.slice(6, 11)); //получить срез строки



//Числo

const num = 12.2;
console.log(Math.round(num)); //Округление до ближайшего целого числа


const test = "14.7px";
console.log(parseFloat(test)); // получаем число таким какое оно есть, переводит строку в десятичный систему исчисления
console.log(parseInt(test)); // получаем целое число с типом данных number
