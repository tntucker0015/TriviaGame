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
    console.log(x);
    $("#answersA").text(x[0]);
    $("#answersB").text(x[1]);
    $("#answersC").text(x[2]);
    $("#answersD").text(x[3]); 
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]);
}

function nextQuestion () {
    currentQuestion = getRandomQuestion();
    // console.log(currentQuestion);
    // console.log(getAnswers(currentQuestion));
    $("#triviaQuestion").text(currentQuestion.question);
    // $("#answers").text(getAnswers(currentQuestion.answers));
    // $("#answersA").text(getAnswers(currentQuestion.answers));
    // $("#answersB").text(getAnswers(currentQuestion.answers));
    // $("#answersC").text(getAnswers(currentQuestion.answers));
    // $("#answersD").text(getAnswers(currentQuestion.answers));   
    sptAns(); 
}

function startGame() {
  currentQuestion = getRandomQuestion();
  $("#triviaQuestion").text(currentQuestion.question);
//   $("#answers").text(getAnswers(currentQuestion.answers));
    $("#answersA").text(getAnswers(currentQuestion.answers));
    $("#answersB").text(getAnswers(currentQuestion.answers));
    $("#answersC").text(getAnswers(currentQuestion.answers));
    $("#answersD").text(getAnswers(currentQuestion.answers));    

}


$("body").on("click", "#start", function () {
    startGame();
});
$("body").on("click", "#next", function () {
    nextQuestion();
});