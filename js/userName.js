$(function(){

	// Save the user's input into local storage 
	// and then populate the h1 with the username from local storage

	$('#bringItOn').click(function(){
      let clickedAndStoredUsername;
      clickedAndStoredUsername = new Username();
    });

	class Username {
	    constructor(form) {
	        let storedUsername = $("#userName").val();
	        let storedUsernameJSON = JSON.stringify(storedUsername);
	        localStorage.setItem("Username", storedUsernameJSON);
	    }

	}

});