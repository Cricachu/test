var a = 1; // integer
var b = 1.2; // float 
var c = "1"; // string
var d = false; // boolean
var e = []; // array
var cat = {
	size: 4,
	age: 8,
	findMouse: function 
}; // object

cat.size = "4"

cat.name = "Charles";
cat.age = "3";
cat.age = 90;	
cat.findMouse = function () {
	console.log("khong");
}

cat.findMouse();

// Operators +, -, *, /, &&, ||, %, >, <, >=, <=, ==, ===, !=

(true || false)
(username == "long" || phone == "1234")

10 % 2 // return remainder

Write a program that has the following variables:

a = 'Male'
b = 3
c = 'Charles'
d: findMouse function that will printout the text "Nope" on the screen

and an object name cat that has the following properties:
a Cat that has a name equal to variable 'c', age equal to variable 'b', gender equal to variable 'a' and can findMouse

When running the program, it should printout the text "Nope" if the cat's age is less than 3


var a = "male";
var b = 3;
var c = "Charlie";
findmouse = function() {console.log("Nope");};

var cat ={};
cat.findmouse = function() {console.log("Nope");};




Write a function which accepts an object as parameter then add information to it and return the result. Information to add: age, name, gender. 

Expected: We can use the function to create a template object. For example: We need to create a template like this: 

cat: {
  name: "Charlie",
  age: 3,
  hobby: ["eat","lazy","meow"]
}

We should create a function name createCat which will accept an object, then change it into cat.


var CreateCat = function(cat) {
	
	console.log(cat.name); 
	console.log(cat.age);
	console.log (cat.hobby);
};

CreateCat({name:"Charlie", age: 3, hobby:["eat","lazy","meow"]});








var cat = {
	name: "Charlie",
	age:3,
	hobby: ["eat","lazy","meow"],
};

var CreateCat = function(objectname) {
	
	return objectname;

};


console.log(CreateCat(cat));

