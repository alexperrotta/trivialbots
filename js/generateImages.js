

	function generateRobot(){
	    $.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function(response){
	        $('#robotRow').append('<div><img src="'+response.url+'" width="100"/></div>');
	    }.bind(this));
	}


	function generateX(){
	    $('#robotRow').append('<div><img src="https://vignette.wikia.nocookie.net/house-of-cards/images/a/a5/X.png/revision/latest?cb=20161128021903" width="100"/></div>');
	    
	}	






