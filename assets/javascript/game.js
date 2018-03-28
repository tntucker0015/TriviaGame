var timer = 60;
var intervalId;
var currentQuestion;
var answerA = [];
var answerB = [];
var answerC = [];
var answerD = [];
var userGuess = [];
var game = {
    correctGuesses: 0,
    incorrectGuesses: 0,
    u: '',
};

function responseW (){
    $("#responseW").text("");
}

function responseL (){
    $("#responseL").text("");
}
function verify() {
    console.log(game.u);
    console.log(this.currentQuestion.answer);
 if (game.u === this.currentQuestion.answer) {
     game.correctGuesses++;
     $("#correctGuesses").text(game.correctGuesses);
     $("#responseW").text("You guessed " + game.u + " and that is CORRECT!");
     setTimeout(responseW, 2000);
     reset();
     nextQuestion();
 } 
 else {
    game.incorrectGuesses++;
    $("#responseL").text("You got eaten by a Lion...You Should Have Guesses " + this.currentQuestion.answer);
    setTimeout(responseL, 2000);
    $("#incorrectGuesses").text(game.incorrectGuesses);
    reset();
    nextQuestion();
 }
}

function getRandomQuestion() {
  var random = Math.floor(Math.random() * quest.length);
  return quest[random];
}

function getAnswers(question) {
  var answers = [];
  answers.push(currentQuestion.answer);

  do {
    var newQuestion = getRandomQuestion();
    if (answers.indexOf(newQuestion.answer) === -1) {
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
    answerA.push(x[0]);
    answerB.push(x[1]);
    answerC.push(x[2]);
    answerD.push(x[3]);
   }

function nextQuestion () {
    currentQuestion = getRandomQuestion();
    $("#triviaQuestion").text(currentQuestion.question);  
    sptAns(); 
    run();
}

function startGame() {
  game.correctGuesses = 0;
  game.incorrectGuesses = 0;
  $("#incorrectGuesses").text(game.incorrectGuesses);
  $("#correctGuesses").text(game.correctGuesses);
  reset();
  currentQuestion = getRandomQuestion();
  $("#triviaQuestion").text(currentQuestion.question);
  sptAns();  
  run();
  off();
}

// runs the clock 
function run() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(countdown, 1000);
  }
//   decreases the time to 0;
function countdown() {
    timer--;
    $("#timeLeft").text(timer);
    //  displays overlay when timer gets to 0;
    if (timer === 0) {
        clearInterval(this.intervalId);
        gameOver();
        return false;
    }
}

function reset() {
    answerA.length = 0;
    answerB.length = 0;
    answerC.length = 0;
    answerD.length = 0;
    userGuess.length = 0;
    clearInterval(this.intervalId);
}

function gameOver() {
    timer = 30;
    document.getElementById("overlay").style.display = "block";
    $("#overlay").text("GAME OVER");
    document.getElementById("overlay1").style.display = "block";
    $("#overlay1").text("Correct Answers: " + game.correctGuesses);
    document.getElementById("overlay2").style.display = "block";
    $("#overlay2").text("Incorrect Answers: " + game.incorrectGuesses);

}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("overlay2").style.display = "none";

}

$("body").on("click", "#start", function () {
    startGame();
});

$("body").on("click", "#answersA", function () {
    userGuess.push(answerA[0]);
    game.u = userGuess[0].toString();
    verify();

});
$("body").on("click", "#answersB", function () {
    userGuess.push(answerB[0]);
    game.u = userGuess[0].toString();
    verify();
});
$("body").on("click", "#answersC", function () {
    userGuess.push(answerC[0]);
    game.u = userGuess[0].toString();
    verify();
});

$("body").on("click", "#answersD", function () {
    userGuess.push(answerD[0]);
    game.u = userGuess[0].toString();
    verify();
});