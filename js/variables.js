var	mobileMenuTitle = "Menu",					//The title of the mobile menu
	
	hero100PercentHeight = false,				//If true, the hero section (home) will be set with a minimum height of 100% window height. If false, hero height will be the height of its content.
	
	//TWITTER VARIABLE
	twitter_username = "Envato",				//Replace with your own Twitter username
	
	
	//GOOGLE MAP VARIABLES
	map_canvas_id = "map_canvas",				//The HTML "id" of the map canvas
	map_color = "#1abc9c",						//Google map color
	map_initial_zoom = 16,						//The initial zoom when Google map loads
	map_initial_latitude = -6.6019588,			//Google map initial Latitude. If "null", latitude of the first marked will be used
	map_initial_longitude = 106.8066378,		//Google map initial Longitude. If "null", longitude of the first marked will be used
	use_default_map_style = false,				//If true, default map style will be used
	
	//CONTACT FORM VARIABLES
	contact_form_success_msg = "Thank you for your confirmation.",
	contact_form_error_msg = "Error sending message :(",
	
	
	//COUNTDOWN VARIABLES
	c_days = "DAYS",							//Countdown "Days" label
	c_hours = "HOURS",							//Countdown "Hours" label
	c_minutes = "MIN.",							//Countdown "Minutes" label
	c_seconds = "SEC.",							//Countdown "Seconds" label
	countdownEndMsg = "Event Started!";			//Message to display when the countdown reaches the end

var map_markers = [
	{
		"title": "IPB International Convention Center (IICC)",
		"latitude": -6.601244,
		"longitude": 106.806623,
		"icon": "fa-glass", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
		"infoWindow": "Lokasi Resepsi : IPB International Convention Center (IICC)."
	},
	{
		"title": "Masjid Alumni IPB",
		"latitude": -6.6023287,
		"longitude": 106.8064729,
		"icon": "fa-bell-o", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
		"infoWindow": "Lokasi Akad : Masjid Alumni IPB."
	}
];