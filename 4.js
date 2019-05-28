var a = 1;

var functionName = function(param1, params2) {
	var a = 1;
	return a;
};

var b = functionName(1, 2);

var random = Math.random() * 10;
random = Math.round(random);
// console.log(random);

var randomize = function() {
	var random = Math.random() * 10;
	random = Math.round(random);
	// console.log(random);
};

for (var i = 0; i < 10; i++) {
	randomize();
}

var randomize = function(number) {
	var random = Math.random() * number;
	random = Math.round(random);
	console.log(random);
};

for (var i = 0; i < 10; i++) {
	// randomize(30);
}

var randomize1 = function() {
	var random = Math.floor(Math.random() * 10 + 1);
	console.log(random);
};

for (var i = 0; i < 10; i++) {
	// randomize1();
}

var rollDice = function() {
	var dice = Math.floor(Math.random() * 6 + 1);
	// console.log(dice);
	return dice;
};

for (var i = 0; i < 10; i++) {
	// rollDice();
}

var count = 1;
var prev = rollDice();
// console.log(prev);

while (true) {
	var current = rollDice();
	// console.log(current);
	count = count + 1;
	if (current == prev) {
		break;
	}
	prev = current;
}

// console.log(count);

var count3 = 1;
var first = rollDice();
var second = 0;

while (true) {
	var current = rollDice();
	count3 = count3 + 1;
	second = current;
	current = rollDice();
	count3 = count3 + 1;
	// console.log(first + "-" + second + "-" + current);
	if (second == first && current == first) {
		break;
	}
	first = current;
}

// console.log(count3);

var prev = rollDice();
// console.log(prev);
var count = 0;
var countConsecutives = 0;

while (true) {
	var current = rollDice();
	// console.log(current);
	count = count + 1;
	if (current == prev) {
		countConsecutives++;
		if (countConsecutives == 6) {
			break;
		}
	} else {
		countConsecutives = 0;
	}
	prev = current;
}

// console.log(count);

// Write a program that simulating 2 players (A,B) roll dice and see who will get 7 consecutive results, Print out the count of rolling and who win.g

var rollDice = function() {
	var dice = Math.floor(Math.random() * 6 + 1);
	// console.log(dice);
	return dice;
};

var prevA = rollDice();
// console.log(prev);
var countA = 0;
var countConsecutivesA = 0;

while (true) {
	var current = rollDice();
	// console.log(current);
	countA = countA + 1;
	if (current == prevA) {
		countConsecutivesA++;
		if (countConsecutivesA == 7) {
			break;
		}
	} else {
		countConsecutivesA = 0;
	}
	prevA = current;
}

var prevB = rollDice();
// console.log(prev);
var countB = 0;
var countConsecutivesB = 0;

while (true) {
	var current = rollDice();
	// console.log(current);
	countB = countB + 1;
	if (current == prevB) {
		countConsecutivesB++;
		if (countConsecutivesB == 7) {
			break;
		}
	} else {
		countConsecutivesB = 0;
	}
	prevB = current;
}

var rollDice = function() {
	var dice = Math.floor(Math.random() * 6 + 1);
	// console.log(dice);
	return dice;
};

var playerRoll = function() {
	var prevA = rollDice();
	// console.log(prev);
	var countA = 0;
	var countConsecutivesA = 0;

	while (true) {
		var current = rollDice();
		// console.log(current);
		countA = countA + 1;
		if (current == prevA) {
			countConsecutivesA++;
			if (countConsecutivesA == 7) {
				break;
			}
		} else {
			countConsecutivesA = 0;
		}
		prevA = current;
	}
	return countA;
};

var player1 = playerRoll();
var player2 = playerRoll();

console.log(player1);
console.log(player2);
if (player1 > player2) {
	console.log("The winner is B");
}
if (player1 < player2) {
	console.log("The winner is A");
}
if (player1 == player2) {
	console.log(" No winner");
}
