var question1 = {
  clue: "Who caught the helmet catch for the Giants in Super Bowl XLII?",

  answer1: "Victor Cruz",
  answer2: "David Tyree",
  answer3: "Mario Manningham",
  answer4: "Plaxico Burress",

  correct: "David Tyree",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question2 = {

  clue: "What running back retired from the Giants in the prime of his career?",

  answer1: "Brandon Jacobs",
  answer2: "Ron Dayne",
  answer3: "Tiki Barber",
  answer4: "Rodney Hampton",

  correct: "Tiki Barber",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question3 = {

  clue: " Wh0 was the starting QB for the Giants in 1994?",

  answer1: "Phil Simms",
  answer2: "Danny Kannell",
  answer3: "Dave Brown",
  answer4: "Kerry Collins",

  correct: "Dave Brown",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question4 = {

  clue: " Who was the qb of the Giants in Superbowl XXV?",

  answer1: "Jeff Hostetler",
  answer2: "Phil Simms",
  answer3: "Kerry Collins",
  answer4: "Eli Manning",

  correct: "Jeff Hostetler",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question5 = {

  clue: "What Giants linebacker changed the game of football?",

  answer1: "Harry Carson",
  answer2: "Lawrence Taylor",
  answer3: "Carl Banks",
  answer4: "Antonio Pierce",

  correct: "Lawrence Taylor",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question6 = {

  clue: "What Giants receiver proposed to a kicking net?",

  answer1: "Amani Toomer",
  answer2: "Odell Beckham Jr.",
  answer3: "Steve Smith",
  answer4: "victor Cruz",

  correct: "Odell Beckham Jr.",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question7 = {

  clue: "What Giants player was highly successful as an offensive and defensive player?",

  answer1: "Y.A. Tittle",
  answer2: "Sam Huff",
  answer3: "Frank Gifford",
  answer4: "Pepper Johnson",

  correct: "Frank Gifford",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question7 = {

  clue: "what year did the Giants stop playing at the Polo Grounds ?",

  answer1: "1948",
  answer2: "1955",
  answer3: "1962",
  answer4: "1959",

  correct: "1955",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}

var question8 = {

  clue: "what year did the Giants play at the Yale Bowl?",

  answer1: "1968",
  answer2: "1978",
  answer3: "1974",
  answer4: "1994",

  correct: "1974",


  ask: function() {
    $(".question").html(clue);
    $("#answer1").html(answer1);
    $("#answer2").html(answer2);
    $("#answer3").html(answer3);
    $("#answer4").html(answer4);



  }
}




//global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 30;
var interval;


//restart game function
function starttrivia() {
  correct = 0;
  wrong = 0;
  unanswered = 0;
  counter = 30;
}

//restart timer function

//timer function
$(document).ready(function() {

  var counter = 30;
  var interval = setInterval(function() {
    counter--;
    $(".timer").html("Final countdown :" + " " + counter + " " +
      "seconds!");
    if (counter === 0) {
      $(".timer").html("Time is up!!");
      clearInterval(interval);
    }
  }, 1000);
});
