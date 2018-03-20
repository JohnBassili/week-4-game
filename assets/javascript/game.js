
var random_result;
var lost;
var win;

// Setters
//Getters

//$(".crystal").attr('class');

random_result = Math.floor(Math.random() * 60 ) + 30; //hosting

$("#result").html('Random Result:' + random_result);
for (var i = 0; i < 4; i++) {

	var random = Math.floor(Math.random() * 11) + 1;
	console.log(random)

	var crystal = $("<div>");
	crystal.attr({
		"class": 'crystal',
		"data-random": random}); 

	$(".crystals").append(crystal);


	$("crystal").on('click', function () {
		console.log($(this));

	});
	

//speudo coding

//A game with 4 crystals and Random result
//A new random number should be generated every single time we win or lose to those 4 crystals.
//When clicking any CRYSTAL, it should be adding to the previous result until it equals the random result.
//If it is greater than the Random result, we decrement a lost counter.
// If it is equal, then we increment a win counter.
