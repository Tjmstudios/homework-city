var city = new Array(); //declare an empty array which will be used by our code later

$(document).ready(function(){

	populateCityNameAndImagePaths(); //Populate data on page load

});

$("#submit-btn").on("click",function(evt){ //Bind the click event on Submit button

	var cityName =  $("#search-text").val().trim().toUpperCase(); // Remove extra spaces and newlines from user input and convert it into upper case letters (because the array has upper case letters)
	if(cityName != null && cityName != '')
	{
		if(city[cityName] == undefined) // check if the specified name exists in our array or not. If no then display error message
		{
			alert('Wrong Input! try New York, San Francisco, Los Angeles, Austin, Sydney');//error prompt with solution
			$("#search-text").val(''); //Reset the input field
			$('video').trigger('play').css("display", "block");//you've been rick rolled
			$('header').css("background", "0");
			$('h1').text('U just got rick rolled');
			$('p').text('Never gonna give you up');
			$('form').css('opacity', ".1");
		}
		else
		{
			$('#image').css('backgroundImage','url('+city[cityName] +')'); //Change the Background of Web Page
			$("#search-text").val('');//Reset the input field
			//no more Rick
			$('video').trigger('pause').css("display", "none");
			$('header').css("background", "rgba(0,0,0, .5)");
			$('h1').text('CitiPix');
			$('p').text([cityName] + ', Your Pix');
			$('form').css('opacity', "1");
		}

	}

	evt.preventDefault(); //Avoid refreshing of page
	return false; //Avoid refreshing of page

});
function populateCityNameAndImagePaths(){ //This function prepopulate the data

	//Populate data for NYC
	city['NEW YORK'] = 'images/nyc.jpg';
	city['NEW YORK CITY'] = 'images/nyc.jpg';
	city['NYC'] = 'images/nyc.jpg';

	//Populate Data for SF
	city['SAN FRANCISCO'] = 'images/sf.jpg';
	city['SF'] = 'images/sf.jpg';
	city['BAY AREA'] = 'images/sf.jpg';

	//Populate Data for LA
	city['LOS ANGELES'] = 'images/la.jpg';
	city['LA'] = 'images/la.jpg';
	city['LAX'] = 'images/la.jpg';

	//Populate Data for Austin
	city['AUSTIN'] = 'images/austin.jpg';
	city['ATX'] = 'images/austin.jpg';

	//Populate Data for Sydney
	city['SYDNEY'] = 'images/sydney.jpg';
	city['SYD'] = 'images/sydney.jpg';

};
