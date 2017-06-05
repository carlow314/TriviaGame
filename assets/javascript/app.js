//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 15;
var currentQuestionIndex = 0;
var selectedAnswer = "";
var clock;
var startScreen;
var gameHTML;

//functions for game
//function for initialization of the game
function start() {
  startScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Kickoff!</a></p>";
  $(".main").html(startScreen);
};
//Set interval function for countdown
function timer() {
  clock = setInterval(fifteenSeconds, 1000);

  function fifteenSeconds() {
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
//function to determine what question in the array you are in. If you are at the
//end of array go to the final screen showing game stats
function wait() {
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    generateHTML();
    counter = 15;
    timer();
  } else {
    finalScreen();
  }
};
//Set win function
function win() {
  correct++;
  gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + questions[currentQuestionIndex].correct + "</p>" + questions[currentQuestionIndex].image;
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
};
//set loss funcion
function loss() {
  wrong++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + questions[currentQuestionIndex].correct + "</p>" + questions[currentQuestionIndex].wrongimage;
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
};
//set loss function for expiration of countdown
function timeOutLoss() {
  unanswered++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questions[currentQuestionIndex].correct + "</p>" + questions[currentQuestionIndex].timeupimage;
  $(".main").html(gameHTML);
  setTimeout(wait, 3000);
};
//function for stat screen
function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Game over! How did you fare?" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + wrong + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".main").html(gameHTML);
};
//function for game restart
function resetGame() {
  currentQuestionIndex = 0;
  correct = 0;
  wrong = 0;
  unanswered = 0;
  counter = 15;
  generateHTML();
  timer();
};

//function for layout for trivia game
function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questions[currentQuestionIndex].question + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer1 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer2 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer3 + "</p><p class='answer text-center'> " + questions[currentQuestionIndex].answer4 + "</p>";
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
  } else {

    clearInterval(clock);
    loss();
  }
});

$(".main").on("click tap", ".reset-button", function(event) {
  resetGame();
});
