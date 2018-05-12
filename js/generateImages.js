function generateRobot(){
	$.get('https://api.nasa.gov/planetary/apod?api_key=GgDaB1z878o5FmTa8ln5mndfLd6LqLcwJfSG7NoF', function(response){
		$('#robotRow').append('<div class="robotBox" style="background: url(https://robohash.org/'+Math.random()+'), url('+response.url+'); background-size: cover;"></div>');
	}.bind(this));
	$('#a').html('Correct! Your New Robot Is Below!');
    $('#a').css({'background-color':'green', 'color':'white'});
}

function generateX(){
	$('#robotRow').append('<div class="wrongX"><img style="background-size: cover;" src="img/x.png"/></div>');
	$('.wrong').css({'background-color':'red', 'color':'white'});
	$('#a').css({'background-color':'green', 'color':'white'});
}


