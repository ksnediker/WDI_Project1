// ====== Pseudo Code =======

//===Game basics===

// Player(s) vs. dealer
// 52 card deck: 13 of each suit (2 through Ace)
// Number cards are worth their number value; J,Q,K worth 10; Ace worth 11 unless player busts then it's 1


// ===How to play===

// 2 random cards dealt to player(s) and dealer
// Sum inital two cards
	// If cards sum to 21 - win
// Players(s) stay if they are good with initial 2 cards
// Player(s) hit if they want an additional card
	// Sum all cards
		// If sum > 21 - bust
		// If sum = 21 - win
		// if sum < 21 - give the option to hit again
			//repeat steps



// ====How to win===

// Get 21 points on the player's first two cards (called a blackjack), without a dealer blackjack;
// Reach a final score higher than the dealer without exceeding 21; or
// Let the dealer draw additional cards until his or her hand exceeds 21.



// =====Code Academy Practice=====

// Function that gets two random numbers and sums them

var twoRandomScores = function () {
    var score1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    console.log(score1);
    var score2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(score2);
    return score1 + score2;
}

twoRandomScores();

// Gets a random number between 1 and 52

var randomScore = Math.floor(Math.random() * (52 - 1 + 1)) + 1; 
console.log("I got the score " + randomScore);

// Gets a random number between 1 and 52 and then uses modulo division get the reminder when the random number is divided by 13. This is how suits will be assigned.

var deal = Math.floor(Math.random() * (52 - 1 + 1)) + 1; 
var final = deal % 13;
console.log(final);

// Gets a random number between 1 and 40 and uses modulo division to assign a variable as either even or odd. This is how K, Q, J will be assigned values of 10.

var outcome;
var deal = Math.floor(Math.random() * (40 - 1 + 1)) + 1; 
if(deal % 2 ===0) {
    outcome = "even";
} else {
    outcome = "odd";
}
console.log(deal);



//======Code Academy Blackjack=====


// Dealing a random card

var card = Math.floor(Math.random() * (52 - 1 + 1)) + 1; 

// Function that returns a random card

var deal = function() {
    var card = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
    return card;
}

// Variables that call the deal function and get assigned a random card (cards still 1-52 at this point)

var card1 = deal();
var card2 = deal();

console.log(card1)
console.log(card2)

// Function that gets the value of each from 0-12 instead of 1-52.

var getValue = function(card) {
    return card % 13;
}
// Function that will assign points by adding up the cards (with new values of 0-12)

var score = function() {
    return getValue(card1) + getValue(card2);
}
score();
console.log(score());







//======Random thoughts and ideas=====

// var obj = {
//     key1: value1,
//     key2: value2
// };

pop the last card out (ogres game)