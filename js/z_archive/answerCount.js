// keep track of questions answered

// answerCount
// if < 10, keep going
// if == 10, game over

let questionsAnswered = 0;

function answerCount() {
	
	if (questionsAnswered < 10) {
		questionsAnswered++;
	} else if (questionsAnswered === 10 )
		gameOver();


}