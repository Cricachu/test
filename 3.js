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
