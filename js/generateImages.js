function generateRobot(){
	$.get('https://api.nasa.gov/planetary/apod?api_key=GgDaB1z878o5FmTa8ln5mndfLd6LqLcwJfSG7NoF', function(response){
		$('#robotRow').append('<div class="robotBox" style="background: url(https://robohash.org/'+Math.random()+'), url('+response.url+'); background-size: cover;"></div>');
	}.bind(this));
	$('#a').html('Correct! Your New Robot Is Below!');
    $('#a').css({'background-color':'green', 'color':'white'});
}

function generateX(){
	$('#robotRow').append('<div class="robotBox"><img src="https://vignette.wikia.nocookie.net/house-of-cards/images/a/a5/X.png/revision/latest?cb=20161128021903" width="180"/></div>');
	$('.wrong').text('Nope! Click Below for a New Question');
	$('.wrong').css({'background-color':'red', 'color':'white'});
	$('#a').text('It was this one. Click Below for a New Question');
    $('#a').css({'background-color':'green', 'color':'white'});
}	
