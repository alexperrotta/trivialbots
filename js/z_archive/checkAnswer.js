// checkAnswer
// if correct or if wrong
// if correct, generateRobot()
// if wrong, go back to nextQuestion() with alert("That's wrong. Go to next question")

console.log("check answer linked");


$(function(){


	$(".btn btn-outline-dark btn-lg btn-block").click(function() {

		let selectedAnswer = $(this).val();
		let correctAnswer = `${results.correct_answer}`;
		let questionsAnswered = 0;

		if (selectedAnswer === correctAnswer) {
		 	  generateRobot();
		 	  answerCount(); 
		  	} else if (selectedAnswer != correctAnswer && questionsAnswered < 10)  {
		  	  alert("Sorry, that's wrong! Click Get Question to continue.") 
		  	  answerCount();
		  	} else if (questionsAnswered === 10) {
		  		gameOver();
		  	} 
		  
		  
	});

	 

});



