console.log("I'm Linked!");

$(function(){
    let currentModule;
    $('#testing').click(function(){
        let savedNameForPlayer1 = $("#player1Name").val();
        let player1NameJSON = JSON.stringify(savedNameForPlayer1);
        localStorage.setItem("player1sName", player1NameJSON);
        let savedNameForPlayer2 = $("#player2Name").val();
        let player2NameJSON = JSON.stringify(savedNameForPlayer2);
        localStorage.setItem("player2sName", player2NameJSON);
        // console.log(player1NameJSON);
    });
})