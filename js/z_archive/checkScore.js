function checkScore() {
	if (wrongAnswer < 10) {
		nextQuestion();
	} else if (wrongAnswer === 10 )
		gameOver();
}