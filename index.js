var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('What is your name? ');
console.log("Welcome " + userName + " to the game: How well do you know atish ");

function play(question, answer) {
  var gameAnswer = readlineSync.question(question);
  if (gameAnswer === answer) {
    score = score + 1;
    console.log("right");
    console.log(score);
  }
  else {
    console.log("wrong");
    console.log(score);
  }
}

var questionOne = {
  question: "Where does atish live ",
  answer: "Osmanabad",
}

var questionTwo = {
  question: "What is atish's science degree in (-specific field) ",
  answer: "Microbiology",
}
var questionThree = {
  question: "What's atish's native place ",
  answer: "Lonavala",
}
var questionFour = {
  question: "Where was atish born ",
  answer: "Dharashiv",
}


// play(questionOne.question,  questionOne.answer);
// play(questionTwo.question, questionTwo.answer);

var myArray = [questionOne, questionTwo, questionThree, questionFour];
for (var i = 0; i < myArray.length; i++) {
  var currentArray = myArray[i];
  play(currentArray.question, currentArray.answer);
}

console.log("Well done!!! Your score is " + score + "out of 4");
console.log("All time high score is 4/4 scored by atish " + "\n if you matched/scored high then send me screenshot and i'll update the scores");


