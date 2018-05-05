class PlayerNameModule {
    constructor(container) {
        let playerOneName = '';
        let playerTwoName = '';

        let playerOne = prompt("Enter player One's name");
        let playerTwo = prompt("Enter player Two's name");

        this.container = $(container);
        this.container.html("<div>Player 1 "+playerOne+"</div>");
        this.container.append("<div>Player 2 "+playerTwo+"</div>");
    }
}