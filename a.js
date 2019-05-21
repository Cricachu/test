var a = 1;
var b = 2;
var c = "long";
var d = [1, 2, "long", {}];

c.length; // property
c.trim(); // method return string
c.split(); // method return array

var a = "male";
var b = 3;
var c = "Charlie";
var d = function() {
	console.log("Nope");
};

var returnFour = function() {
	return 4;
};

var sum = function() {
	var total = 0;
	total = 1 + 2;
	return total;
};

var e = sum();

var multiply = function(number1, number2) {
	var result = 0;
	result = number1 * number2 * number1 + number2;
	return result;
};

// var g = multiply(5, 2);

var str = function(str1, str2) {
	var result = str1 + " " + str2;
	console.log(result);
};

str("charlie", "ngu");

var str4 = function(str1, str2, str3, str4) {
	if (str1 == null || str2 == null || str3 == null || str4 == null) {
		var result4 = str1 + " " + str2 + " " + str3 + " " + str4;
		console.log(result4);
	} else {
		console.log("Required 4 params to operate");
	}
	return result4;
};

str4("meo", "ngu", "ngoc");

var numb1 = 2;
var numb2 = 3;

var calculateSquared = function(numb1) {
	var result5 = numb1 * numb1;
	return result5;
};

console.log(calculateSquared(100));

var findLargerNumber = function(numb1, numb2) {
	if (numb1 > numb2) {
		console.log(numb1);
	} else if (numb2 > numb1) {
		console.log(numb2);
	} else {
		console.log("nah");
	}
};

switch (numb1 > numb2) {
	case true:
		console.log(numb1);
		break;
	case false:
		console.log(numb2);
		break;
	default:
		console.log("nah");
}

findLargerNumber (5,5);


var today = "Monday"
switch (today) {
	case "Monday":
		console.log("thu 2");
		break;
		case "Tuesday":
		console.log ("thu 3");
		break;
		case "Wednesday":
		console.log ("thu 4");
		break;
		case "Thursday":
		console.log ("thu 5");
		break;
		case "Friday":
		console.log ("thu 6");
		break;
		case "Saturday":
		console.log ("thu 7");
		break;
		case "Sunday":
		console.log ("Chu nhat");
		break;

}
 








var e = returnFour;

// var f = returnFour();

// e();

var cat = {};

cat.gender = a;
cat.age = b;
cat.name = c;
cat.findMouse = d;
