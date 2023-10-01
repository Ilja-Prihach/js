const word0 = "Wassup",
    word0translate = "Здарова",

    word1 = "Bye",
    word1translate = "Пока",

    word2 = "Programmer",
    word2translate = "Программист",

    finishSuccesMessage = "Молодец, good result";
    finishUnsuccesMessage = "Молодец, но постарайся лучше";


let correctAnswersCount = 0;
const wordCount = 2;  

const correctAnswersMinPercent = 50;





const userAnswer0 = prompt(word0);
alert(userAnswer0 === word0translate);
if (userAnswer0 === word0translate) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer1 = prompt(word1);
alert(userAnswer1 === word1translate);
if (userAnswer1 === word1translate) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer2 = prompt(word2);
alert(userAnswer2 === word2translate);
if (userAnswer2 === word2translate) {
    correctAnswersCount = correctAnswersCount + 1;
}

const userCorrectAnswersPersent = (correctAnswersCount / wordCount) * 100;
if(userCorrectAnswersPersent > correctAnswersMinPercent) {
    alert(finishSuccesMessage);
} else {
    alert(finishUnsuccesMessage);
}

