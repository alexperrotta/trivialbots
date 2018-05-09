// gameOver()
// message
// play again option
// quit option

class gameOver {
	constructor(container) {
 		this.container = $('.questionAnswers');
 		this.empty();
 		this.render();
 	}
 	
 	clearOut() {
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
}