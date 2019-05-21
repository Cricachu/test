var transformCat = function(cat) {
	cat.name = "Charlie";
	cat.age = 3;
	cat.hobby = ["eat", "lazy", "meow"];
	return cat;
};

var emptyObject = {};
emptyObject = transformCat(emptyObject);

// console.log(emptyObject);

var createCat = function() {
	var cat = {
		name: "Charlie",
		age: 200
	};
	return cat;
};

var createCat2 = function() {
	var cat = {
		name: "Charlie",
		age: 2030
	};
	return cat;
};

var cat1 = createCat();
var cat2 = createCat2();

// console.log(cat2);

// LOOP

var array = [];

for (var i = 0; i < 10; i++) {
	var cat = createCat();
	cat.number = i + 1;
	array.push(cat);
}

// console.log(array);

var string = "";

for (var i = 0; i < 20; i++) {
	string = string + i;
	// console.log(string);
}

var colors = [
	"yellow",
	"red",
	"grey",
	"yellow",
	"red",
	"grey",
	"yellow",
	"red",
	"grey",
	"yellow"
];

// for (var i = 0; i < array.length; i++) {
// 	if (colors[i] === "grey") {
// 		continue;
// 	}
// 	var cat = array[i];
// 	cat.color = colors[i];
// 	array[i] = cat;
// }

// console.log(array);

for (var i = 0; i < array.length; i++) {
	if ((i + 1) % 2 == 0) {
		var cat = array[i];
		cat.color = colors[i];
		array[i] = cat;
	}
}

// console.log(array);

var result = 0;

for (var i = 0; i < 100; i++) {
	if (i % 5 == 0 || i % 3 == 0) {
		result = result + i;
	}
}

// console.log(result);

var sumResult = 0;
for (var i = 0; i < 1000000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		sumResult = sumResult + i;
	}
}

// console.log(sumResult);

var arrayNumber = [20, 4, 25, 6, 4, 1, 2, 3, 9];

var max = 0;

for (var i = 0; i < arrayNumber.length; i++) {
	if (max < arrayNumber[i]) {
		max = arrayNumber[i];
	}
}

// console.log(max);

var array1 = [[0, 1, 2], [2, 3, 4], [1, 5, 6]];

for (var i = 0; i < array1.length; i++) {
	for (var k = 0; k < array1[i].length; k++) {
		// console.log(array1[i][k]);
	}
}

var count = 0;
for (var i = 1; i < 10; i++) {
	if (i % 3 == 0) {
		count = count + 1;
	}
}

console.log(count);

// Given an array of student's score: [10,9,2,5,4,6,8,4,3,6,8,3,7,9,3,2,10,2,8,9,7,10].
// Print out the avarage score, maximum and minimum.
// After that, count and print out the number of Good students, average students and bad students
// knowing that Good students has score > 8, average is lower than 8 and greater than 5, and bad students are lower than 5.
