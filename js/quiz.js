$(function(){

	// Get question from trivia API
	// Then render the questions

	 var question;
	 $('#nextQuestion').click(function(){
	 		question = new Quiz('.questionAnswers');
	 	});

});

	class Quiz {
	 	constructor(container) {
	 		this.container = $(container);
	 		this.getQuestion().then((results) => {
	 			this.render();
	 		this.correctAnswer();
	 		this.wrongAnswer();

	 		});
	 	}

 	getQuestion() {
		  	return $.get('https://opentdb.com/api.php?amount=10&type=multiple').then((data) => {
		  		this.results = data.results;
		  	});
		  }

 	render() {
 		this.container.html(`
 			<div>
 			<h3 class="questionSpace"> ${this.results[0].question} </h3>
 			</div>
 			<div class="container">
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block" id="a">${this.results[0].correct_answer}</button>
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block wrong">${this.results[0].incorrect_answers[0]}</button>
			<button type="button" class="btn btn-outline-dark btn-lg btn-block wrong">${this.results[0].incorrect_answers[1]}</button>
 			<button type="button" class="btn btn-outline-dark btn-lg btn-block wrong">${this.results[0].incorrect_answers[2]}</button>
 			</div> 
 			`);
 	}

 	correctAnswer() {
 		$("#a").click(function(){
 			generateRobot();
 		});	
 	}

 	wrongAnswer() {
 		$(".wrong").click(function(){
 			generateX();
 		});	
 	}
 }

 	
