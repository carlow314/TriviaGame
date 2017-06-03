//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var currentQuestion = 0;
var selectedAnswer;
var timer;
var startScreen;
var gameHTML;

//FUNCTIONS
//===========================================
function start() {
  //Create the start button
  startScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Kickoff!</a></p>";
  //Add Start button to main-area
  $(".main").html(startScreen);
};

function SetCountDown() {
  timer = setInterval(timer, 1000);

  function StopCountDown() {
    if (counter === 0) {
      timeOutLoss();
      clearInterval(timer);
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
};

function wait() {
  if (currentQuestion < 9) {
    currentQuestion++;
    generateHTML();
    counter = 30;
    SetCountDown();
  } else {
    finalScreen();
  }
};

function win() {
  correct++;
  gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + questions.correct[currentQuestion] + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function loss() {
  wrong++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + questions.correct[currentQuestion] + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function timeOutLoss() {
  unanswered++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questions.correct[currentQuestion] + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Game over! How did you fare?" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + wrong + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".main").html(gameHTML);
};

function resetGame() {
  currentQuestion = 0;
  correct = 0;
  wrong = 0;
  unanswered = 0;
  timer = 30;
  generateHTML();
  timer();
};


function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions.question[currentQuestion] + "</p><p class='first-answer answer'>A. " + questions.answer1[currentQuestion] + "</p><p class='answer'>B. " + questions.answer2[currentQuestion] + "</p><p class='answer'>C. " + questions.answer3[currentQuestion] + "</p><p class='answer'>D. " + questions.answer4[currentQuestion] + "</p>";
  $(".main").html(gameHTML);
}



//MAIN PROCESS
//===========================================
start();

//start-button click
$(".main").on("click tap", ".start-button", function(event) {
  event.preventDefault();
  console.log(currentQuestion);
  generateHTML();
  SetCountDown();
}); // Closes start-button click

$(".main").on("click tap", ".answer", function(event) {;
  //If correct answer
  selectedAnswer = $(this).text();
  if (selectedAnswer === questions.correct[currentQuestion]) {

    clearInterval(timer);
    win();
  }
  //If incorrect ansewr
  else {

    clearInterval(timer);
    loss();
  }
}); // Close .answer click

//reset-button click
$(".main").on("click tap", ".reset-button", function(event) {
  resetGame();
}); // Closes reset-button click
