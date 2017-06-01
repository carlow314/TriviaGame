//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var currentQuestion;
var currentAnswer;

//timer function
var counter = 30;
var executeCountdown = function() {
  var intervalId = setInterval(function() {
    counter--;
    $(".timer").html("Final countdown :" + " " + counter + " " +
      "seconds!");
    if (counter === 0) {
      $(".timer").html("Time is up!!");
      clearInterval(intervalId);
    }
  }, 1000);
}

//restart game function
function resettrivia() {
  correct = 0;
  wrong = 0;
  unanswered = 0;
  executeCountdown();
}


//timer function
$(document).ready(function() {
  executeCountdown();
});
