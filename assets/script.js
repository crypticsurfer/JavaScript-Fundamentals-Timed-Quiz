// Starting off by creating variables
//Global Variables
var questions = []
var scoreValue = 0;
var timeRemaining = 120;
var currentQuestion = 0;
var score = 0;

//declaring the rest of the variables
var startButton = document.querySelector("#startButton");
var answerContainer = document.querySelector("#answersDisplay");
var questionText = document.querySelector("#questionsDisplay");
var endScreen = document.querySelector("#endScreen");
var timer = document.querySelector("#timerElement");
var finalScore = document.querySelector("#finalScore");
var container = document.querySelector(".container");
var headerElem = document.querySelector("header");
var quizContainer = document.querySelector("main");
var defaultQuestions = document.querySelector("questionsDefault");
var defaultAnswers = document.querySelector("answersDefault");
var displayedQuestion = document.querySelector("questionsDisplay");
var displayedAnswers = document.querySelector("answersDisplay");
var submitScore = document.querySelector("#submitScore");
var inits = document.querySelector("#inits");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer0p = answer0.querySelector("p");
var answer1p = answer1.querySelector("p");
var answer2p = answer2.querySelector("p");
var answer3p = answer3.querySelector("p");
var answer0Btn = answer0.querySelector("span");
var answer1Btn = answer1.querySelector("span");
var answer2Btn = answer2.querySelector("span");
var answer3Btn = answer3.querySelector("span");
var answerBtnArray = [answer0Btn, answer1Btn, answer2Btn, answer3Btn];
var currentIndex = 0
var clickableButton = [];
var result = document.querySelector("#result")

//button variables
var startGame = document.querySelector("#startButton");
var hScoreBtn = document.querySelector("#viewHighScores");

//questions for quiz
var questionArray = [
    {
    question: "What is an API? and what does it do?",
    answerOptions:[ "Application Programming Interface, it records data sent/receive to the webserver",
    "Application Programmable Instructions, it is used to send different instructions to programmable code",
    "Application Programming Interface, it is an interface programming languages can access to send/receive/modify data",
    "I am so lost here!"],
    answer: "Application Programming Interface, it is an interface programming languages can access to send/receive/modify data",
    },
    {
    question:"What can we create to have Javascript detect when a user clicks on a button?",
    answerOptions:[ "An Event Listener", "An element in the DOM", "A Media Query in the CSS file", "An API attached to the button"],
    answer: "An Event Listener",
    },
    {
    question: "Select an example of an anonymous callback function:",
    answerOptions: ["var myFunction = function() {<function code here>}", "function myFunction () {<function code here>}", "addEventListener('click', function (event) {<function code here>})", "none of these are anonymous callbacks"],
    answer: "var myFunction = function() {<function code here>}",
    },
    {
    question: "what tool in Javascript can you use to iterate through massive lists of items or data?",
    answerOptions: ["a data-iteration array", "a data-iteration object", "a Web API DOM navigator", "a for/while loop"],
    answer: "a Web API DOM navigator",
    },
    {
    question: "In Javascript, what is the DOM stand for?",
    answerOptions: [ "Document Oriented Model", "Digital Ordered Marketing", "I've never heard of that before in my life!", "Document Object Model"],
    answer: "Document Object Model",
    },
    {
    question: "What websites can we reference if we don't quite understand what a bit of code does?",
    answerOptions: [ "stack exchange", "The Mozilla MDN documentation for JavaScript", "W3Schools website documentation", "all of the above"],
    answer: "all of the above",
    },
];
//creating an object containing everything needed in the quiz
const gameData = {
    timer: 120,
    //isGameEnded: false,
    //correctAnswer: 2,
   // totalScore: 0,
   // setScore: [],
   // getScore: [],
   // highScores: [],
};
//hide the text on the starting page and replace it with questions/answers
/*function hideDefaultText() {
    defaultQuestions.setAttribute("style", "display:none");
    defaultAnswers.setAttribute("style", "display:none");
    displayedAnswers.setAttribute("style", "display:flex; flex-direction: column");
    displayedQuestion.setAttribute("style", "diplay:block");
}*/

//event listener for viewing high scores
//hScoreBtn.addEventListener("click", viewHighScores)

//start the timer when the quiz begins and remove it when time runs out
function startTimer() {
    var timerText = document.createElement("div");
    var timerElem = document.createElement("span");
    var timerInterval = setInterval(function() {
        timerElem.textContent = gameData.timer;
        gameData.timer--;
        if(gameData.timer <= -1 || gameData.answered > 6) {
            clearInterval(timerInterval);
            if(!gameData.isGameEnded) {
                gameOver();
            }
        }
    }, 1000);
    timerText.textContent = "Seconds Remaining:"
    timerText.setAttribute("id", "timerText");
    timerElem.setAttribute("id", "timerElement");
    headerElem.appendChild(timerText);
    headerElem.appendChild(timerElem);
    quizContainer.removeChild(startButton);
    //quizContainer.removeChild(viewHighScores);
};

//event listener for start button 
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    //hideDefaultText();
    startTimer();
    displayQuestion();
    //displayedQuestion.textContent = gameData.questions[0];
    //listAnswers(0);
});
//function to cyclye through questions and answers
function displayQuestion() {
    startButton.style.display = "none"
    answerContainer.style.display = "flex"
    questionText.textContent = questionArray[currentIndex].question
    var answerChoices = questionArray[currentIndex].answerOptions

    for (var i = 0; i < answerChoices.length; i++) {
       answerBtnArray[i].textContent = answerChoices[i];
    }
};

//add event listener for answer input
quizContainer.addEventListener("click", function(event) {
    var userAnswer = event.target;
    if (userAnswer.matches("span")) {
        checkAnswer(userAnswer.textContent)
         }
    });

    //check if answer is correct or not and call another question or end the game
    function checkAnswer(userAnswer) {
        var correctAnswer = questionArray[currentIndex].answer
    if (userAnswer === correctAnswer) {
        result.textContent = "Correct!";
    }
    else {
        result.textContent = "Incorrect!";
        secondsLeft -=5;
    }
    currentIndex++;
    if (questionArray.length > currentIndex) {
        displayQuestion();
    }
    else {
        endGame();
    }
};

//end quiz function
function endGame() {
    timer.textContent = "";
    finalScore.textContent = gameData.timer;
    questionText.textContent = "";
    result.textContent = "";
    answerContainer.style.display = 'none';
    endScreen.style.display = 'flex';
};