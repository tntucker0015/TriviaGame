// to do list:
// add your score area
    //with correct answers
    // with incorrect answers



var currentQuestion;
var answerA = [];
var answerB = [];
var answerC = [];
var answerD = [];
var userGuess = [];
var game = {
    correctGuesses: 0,
    incorrectGuesses: 0,
};

function verify() {
    var CA = [];
    CA.push(this.currentQuestion.answer);
    console.log(userGuess);
    console.log(CA);
 if (userGuess === CA) {
     console.log("you got this");
//      game.correctGuesses++;
//      $("#correctGuesses").text(game.correctGuesses);
 } else {
     console.log("you don know anything");
//      game.incorrectGuesses++;
//      $("#incorrectGuesses").text(game.incorectGuesses);
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
    answerA.push(x[0]);
    answerB.push(x[1]);
    answerC.push(x[2]);
    answerD.push(x[3]);
   }

// function nextQuestion () {
//     reset();
//     currentQuestion = getRandomQuestion();
//     $("#triviaQuestion").text(currentQuestion.question);  
//     sptAns(); 
//     run();
// }

function startGame() {
    reset();
  currentQuestion = getRandomQuestion();
  $("#triviaQuestion").text(currentQuestion.question);
  sptAns();  
  run();

}
//  start timefor counting down
var timer = 125;
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
        // nextQuestion();
    }
}

function reset() {
    this.timer=125;
    answerA.length = 0;
    answerB.length = 0;
    answerC.length = 0;
    answerD.length = 0;
    userGuess.length = 0;
    clearInterval(this.intervalId);
}

$("body").on("click", "#start", function () {
    startGame();
});

// $("body").on("click", "#next", function () {
//     nextQuestion();
// });

$("body").on("click", "#answersA", function () {
    userGuess.push(answerA[0]);
    verify();

});
$("body").on("click", "#answersB", function () {
    userGuess.push(answerB[0]);
    console.log(userGuess);
    verify();
});
$("body").on("click", "#answersC", function () {
    userGuess.push(answerC[0]);
    console.log(userGuess);
    verify();
});

$("body").on("click", "#answersD", function () {
    userGuess.push(answerD[0]);
    console.log(userGuess);
    verify();
});