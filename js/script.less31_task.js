// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal <= 0 || !Number.isInteger(minutesTotal) ) {
        return "Проверьте данные";
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;
    let hoursStr = '';
    switch (hours) {
        case 0: 
        hoursStr = "часов";
        break;
    case 1: 
        hoursStr = "час";
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = "часа";
        break;
    default:
        hoursStr = "часов";           
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(147);
console.log(getTimeFromMinutes(147));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
findMaxNumber(7, 4, 21, 26);
console.log(findMaxNumber(7, 4, 21, 26));