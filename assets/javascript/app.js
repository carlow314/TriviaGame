//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var currentQuestionIndex = 0;
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
  Clock = setInterval(Countdown, 1000);

  function Countdown() {
    if (counter === 0) {
      clearInterval(Clock);
      timeOutLoss();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function wait() {
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    generateHTML();
    counter = 30;
    SetCountDown();
  } else {
    finalScreen();
  }
};

function win() {
  correct++;
  gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + questions[currentQuestionIndex].correct + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function loss() {
  wrong++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + questions[currentQuestionIndex].correct + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function timeOutLoss() {
  unanswered++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questions[currentQuestionIndex].correct + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 5000);
};

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Game over! How did you fare?" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + wrong + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".main").html(gameHTML);
};

function resetGame() {
  currentQuestionIndex = 0;
  correct = 0;
  wrong = 0;
  unanswered = 0;
  timer = 30;
  generateHTML();
  timer();
};


function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[currentQuestionIndex].question + "</p><p class='first-answer answer'>A. " + questions[currentQuestionIndex].answer1 + "</p><p class='answer'>B. " + questions[currentQuestionIndex].answer2 + "</p><p class='answer'>C. " + questions[currentQuestionIndex].answer3 + "</p><p class='answer'>D. " + questions[currentQuestionIndex].answer4 + "</p>";
  $(".main").html(gameHTML);
}



//MAIN PROCESS
start();

//start-button click
$(".main").on("click", ".start-button", function(event) {
  event.preventDefault();
  console.log(currentQuestionIndex);
  generateHTML();
  setCountDown();
}); // Closes start-button click

$(".main").on("click", ".answer", function(event) {;
  //If correct answer
  selectedAnswer = $(this).text();
  if (selectedAnswer === questions[currentQuestionIndex].correct) {

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
