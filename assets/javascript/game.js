// to do list:
// add your score area
    //with correct answers
    // with incorrect answers
// add timer for time of each question:
// add reset function

var currentQuestion;
var game = {
    yourScore: 0,
    correctGuesses: 0,
    incorrectGuesses: 0,
}

function getRandomQuestion() {
  var random = Math.floor(Math.random() * quest.length);
  return quest[random];
}

function getAnswers(question) {
  var answers = [];
  answers.push(currentQuestion.answer);

  do {
    // BUG:
    var newQuestion = getRandomQuestion();
    if (!answers.indexOf(newQuestion.answer) > -1) {
      answers.push(newQuestion.answer);
    } 
  } while (answers.length < 4);
  var random = Math.floor(Math.random() * 4)
  var temp = answers[random];
  answers[random] = answers[0];
  answers[0] = temp;
  return answers;
}
function sptAns () {
    var x = (getAnswers(currentQuestion.answers));
    
    $("#answersA").text(x[0]);
    $("#answersB").text(x[1]);
    $("#answersC").text(x[2]);
    $("#answersD").text(x[3]); 
   }

function nextQuestion () {
    currentQuestion = getRandomQuestion();
    console.log(currentQuestion);
    $("#triviaQuestion").text(currentQuestion.question);  
    sptAns(); 
    run();
}

function startGame() {
  currentQuestion = getRandomQuestion();
  $("#triviaQuestion").text(currentQuestion.question);
  sptAns();  
  run();

}
//  start timefor counting down
var timer = 5;
var intervalId;
// runs the clock 
function run() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(countdown, 1000);
  }
//   decreases the time
function countdown() {
    timer--;
    $("#timeLeft").text(timer);
    if (timer === 0) {
        reset();
        nextQuestion();
    }
}

function reset() {
    this.timer=5;
    clearInterval(this.intervalId);
}

$("body").on("click", "#start", function () {
    startGame();
});

$("body").on("click", "#next", function () {
    nextQuestion();
});