$(function(){

	// Save the user's input to local storage

	$('#bringItOn').click(function(){
      let clickedAndStoredUsername;
      clickedAndStoredUsername = new Username();
    });
	
	// Place the username from local storage to the html

	$(function(){
	    let storedUsernameJSON = localStorage.getItem('Username');  
	    let username = JSON.parse(storedUsernameJSON);

	    $('.display-4').html(username);
  	});


	class Username {
	    constructor(form) {
	        let storedUsername = $("#userName").val();
	        let storedUsernameJSON = JSON.stringify(storedUsername);
	        localStorage.setItem("Username", storedUsernameJSON);
	    }

	}


});