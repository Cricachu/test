var translate = function(day) {
	day = day.toLowerCase();
	switch(day) {
		case "monday": 
		console.log("Thu hai");
		break;
		case "tuesday": 
		console.log("Thu ba");
		break;
		case "wednesday": 
		console.log("Thu tu");
		break;
		case "thursday": 
		console.log("Thu nam");
		break;
		case "friday": 
		console.log("Thu sau");
		break;
		case "saturday": 
		console.log("Thu bay");
		break;
		case "sunday":
		console.log("Chu Nhat");
		break;
		default: 
		console.log("Wrong input");
	}
};

translate("FriDay");

var complicatedTranslate = function(day) {
	day = day.toLowerCase();
	var array = day.split('');
	array[0] = array[0].toUpperCase();
	day = array.join('');
	switch(day) {
		case "Monday": 
		console.log("Thu hai");
		break;
		case "Tuesday": 
		console.log("Thu ba");
		break;
		case "Wednesday": 
		console.log("Thu tu");
		break;
		case "Thursday": 
		console.log("Thu nam");
		break;
		case "Friday": 
		console.log("Thu sau");
		break;
		case "Saturday": 
		console.log("Thu bay");
		break;
		case "Sunday":
		console.log("Chu Nhat");
		break;
		default: 
		console.log("Wrong input");
	}
};

complicatedTranslate('monday');