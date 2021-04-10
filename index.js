var readlineSync = require("readline-sync");

var score = 0;
var userName = '';
var highScores = [
    {
        name: "Akhil",
        score: 3,
    },

    {
        name: "Ankur",
        score: 2,
    },
]

// Question-Answer Object Array
var questions = [{
    question: "Where do I live? ",
    answer: "Bihar"
}, {
    question: "What is my favourite TV series? ",
    answer: "Silicon Valley"
},
{
    question: "Where do I study? ",
    answer: "Jadavpur University"
}];

function welcome() {
    userName = readlineSync.question("So, what should I call you? ");

    console.log("Welcome " + userName + " to The Kishan Quiz?");
}



function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Yay, you got it right!");
        score = score + 1;

    } else {
        console.log("Oops, that's not right!");

    }

    console.log("Current Score: ", score);
    console.log("--------------------")
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScores() {
    console.log("YAY! You SCORED: ", score);
    highScores.push({
        name: userName,
        score: score,
    })
    console.log("LeaderBoard:");

    highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();