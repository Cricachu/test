// Write a program that genrate random username from a-z, 0-9 that has the length from 8 - 32

var dataset = "abcdefghijklmnopqrstuvwxyz0123456789";
var username = [];

var randomNumberAdvanced = function(a, b, c) {
	var results = [];
	for (var i = 0; i < c; i++) {
		results.push(Math.floor(Math.random() * (b - a + 1) + a));
	}
	return results;
};

var randomNumber = function(a, b) {
	return randomNumberAdvanced(a, b, 1)[0];
};

// for (var i = 0; i < 100; i++) {
// 	console.log(randomNumber(8, 32));
// }

var usernameLength = randomNumber(8, 16);

for (var i = 0; i < usernameLength; i++) {
	var randomChar = randomNumber(0, dataset.length - 1);
	// console.log(dataset[randomChar]);
	username.push(dataset[randomChar]);
}

console.log(username.join(""));

var poolkemon = ["pikachu", "venonat", "dratini", "gyarados", "charizard", "arcanine", "latios", "latias", "mewtwo", "lugia"];

var pokemons = [];

var pokeAmount = randomNumber(1, 10);

for (var i = 0; i < pokeAmount; i++) {
	var randomIndex = randomNumber(0, poolkemon.length - 1);
	var pokemon = poolkemon.splice(randomIndex, 1)[0];
	pokemons.push(pokemon);
}

console.log(pokemons);

// write scan function to scan a random number of pokemon from poolkemon. Then write and execute function catch() that will attempt to catch a pokemon with 30% chance.
// Print out the number of tries needed to catch that pokemon
// Extra: Pokemon has different chance to catch, predefined
// Extra: Pokemon has randdom chance to catch
