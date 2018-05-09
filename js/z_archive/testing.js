console.log("linked");

 $(function(){

// main.js


 $('#bringItOn').click(function(){
      let clickedAndStoredUsername;
      clickedAndStoredUsername = new Username();
    });

// Save name to localstorage - playername.js

class Username {
    constructor(form) {
        let storedUsername = $("#userName").val();
        let storedUsernameJSON = JSON.stringify(storedUsername);
        localStorage.setItem("Username", storedUsernameJSON);
    }

}

// Get username from local storage and populate the h1

let storedUsernameJSON = localStorage.getItem('Username');  
let username = JSON.parse(storedUsernameJSON);

$('.container px-3').append('<h1 class="display-4">'+username+'</h1>');





// nextquestion.js


var question;
 $('#nextQuestion').click(function(){
 		question = new nextQuestion('.questionAnswers');
 	});


 class nextQuestion {
 	constructor(container) {
 		this.container = $('.questionAnswers');

 		this.render();
 	}

 	render() {
 		this.container.html(`
 			<div>
 			<h3 class="questionSpace"> Question </h3>
 			</div>
 			<div class="container">
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block" id="a">Correct Answer</button>
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block" id="b">Ans 2</button>
			<button type="button" class="btn btn-outline-dark btn-lg btn-block" id="c">Ans 3</button>
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block" id="d">Ans 4</button>
 			</div> 
 			`);
 	}


}



// keep track of questions answered

// answerCount
// if < 10, keep going
// if == 10, game over

var questionsAnswered = 0;

function answerCount() {
	if (questionsAnswered < 10) {
		nextQuestion();
	} else if (questionsAnswered === 10 )
		gameOver();
}



// checkAnswer
// if correct or if wrong
// if correct, generateRobot()
// if wrong, go back to nextQuestion() with alert("That's wrong. Go to next question")

var selectedAnswer = document.getElementById("").value;
var correctAnswer = ${correct_answer};

 function checkAnswer() {
	if(selectedAnswer === correctAnswer) {
	  generateRobot();
 		nextquestion();  
	} else {
	  nextquestion();
	}
}
var questionsAnswered++;


// generateRobot
// add an alert (see below to see your new robot)
// go back to "get question"

function generateRobot(){
   $.get("https://dog.ceo/api/breeds/image/random', function(response"){
       $(‘body’).append(‘<img src=“‘+ response.message +‘” />’);
   }.bind(this);
   alert("Check out your cool robot below! Click Next Question to continue".)
}



// gameOver()
// message
// play again option
// quit option

function gameOver() {
	constructor(container) {
 		this.container = $('.questionAnswers');
 		this.empty();
 		this.render();
 	}
 	
 	clearOut () {
 		$('#nextquestion').empty();
 	}

 	render() {
 		this.container.html(`
 			<div class="container px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"> 
        	<div class="container text-center" style="width: 400px;"><h3 class="display-4">Game Over</h3><div>
        	<a href="index.html" class="btn btn-primary btn-lg btn-block mt-3" role="button">Play Again</a>
        	<a href="about.html" class="btn btn-primary btn-lg btn-block mt-3" role="button">Quit</a>
      		</div> 
 			`);
}





 });
