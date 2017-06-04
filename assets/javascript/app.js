//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var currentQuestionIndex = 0;
var selectedAnswer = "";
var clock;
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

function timer() {
  clock = setInterval(thirtySeconds, 1000);

  function thirtySeconds() {
    if (counter === 0) {
      timeOutLoss();
      clearInterval(clock);
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
};

function wait() {
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    generateHTML();
    counter = 30;
    timer();
  } else {
    finalScreen();
  }
};

function win() {
  correct++;
  gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + questions[currentQuestionIndex].correct + "</p>" + questions[currentQuestionIndex].image;
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
};

function loss() {
  wrong++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + questions[currentQuestionIndex].correct + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
};

function timeOutLoss() {
  unanswered++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questions[currentQuestionIndex].correct + "</p>";
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
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
  counter = 30;
  generateHTML();
  timer();
};


function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[currentQuestionIndex].question + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer1 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer2 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer3 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer4 + "</p>";
  $(".main").html(gameHTML);
}



//MAIN PROCESS
start();

//start-button click
$(".main").on("click", ".start-button", function(event) {
  event.preventDefault();
  console.log(currentQuestionIndex);
  generateHTML();
  timer();
}); // Closes start-button click

$(".main").on("click", ".answer", function(event) {;
  //If correct answer
  selectedAnswer = $(this).text();
  console.log(selectedAnswer.trim());
  console.log(questions[currentQuestionIndex].correct)
  if (selectedAnswer.trim() === questions[currentQuestionIndex].correct) {
    clearInterval(clock);
    win();
  }
  //If answer is wrong
  else {

    clearInterval(clock);
    loss();
  }
});

$(".main").on("click tap", ".reset-button", function(event) {
  resetGame();
});
