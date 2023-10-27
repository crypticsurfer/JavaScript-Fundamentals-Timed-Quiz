// Starting off by creating variables
//Global Variables
var questions = []
var scoreValue = 0;
var timeRemaining = 120;
var currentQuestion = 0;
var score = 0;

//declaring the rest of the variables
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
var clickableButton = [];

//button variables
var startGame = document.querySelector("#startButton");
var viewHighScores = document.querySelector("#hScoreBtn");

//creating an object containing everything needed in the quiz
const gameData = {
    timer: 120,
    isGameEnded: false,
    correctAnswer: 2,
    totalScore: 0,
    setScore: [],
    getScore: [],
    highScores: [],
    questions: [
        "What is an API? and what does it do?",
        "What can we create to have Javascript detect when a user clicks on a button?",
        "Select an example of an anonymous callback function:",
        "what tool in Javascript can you use to iterate through massive lists of items or data?",
        "In Javascript, what is the DOM stand for?",
        "What websites can we reference if we don't quite understand what a bit of code does?",
    ],
    answered: 0,
    answers: {
        answer0: [
            "Application Programming Interface, it records data sent/receive to the webserver",
            "Application Programmable Instructions, it is used to send different instructions to programmable code",
            "Application Programming Interface, it is an interface programming languages can access to send/receive/modify data",
            "I am so lost here!" 
        ],
        answer1: [
            "An Event Listener",
            "An element in the DOM",
            "A Media Query in the CSS file",
            "An API attached to the button"
        ],
        answer2: [
            "var myFunction = function() {<function code here>}",
            "function myFunction () {<function code here>}",
            "addEventListener('click', function (event) {<function code here>})",
            "none of these are anonymous callbacks"
        ],
        answer3: [
            "a data-iteration array",
            "a data-iteration object",
            "a Web API DOM navigator",
            "a for/while loop"
        ],
        answer4: [
            "Document Oriented Model",
            "Digital Ordered Marketing",
            "I've never heard of that before in my life!",
            "Document Object Model"
        ],
        answer5: [
            "stack exchange",
            "The Mozilla MDN documentation for JavaScript",
            "W3Schools website documentation",
            "all of the above"
        ],
    }
}


