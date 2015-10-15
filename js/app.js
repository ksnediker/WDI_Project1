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



//======Blackjack Code=====


// Function that returns a random card

var deal = function() {
    var card = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
    return card;
}


// Variables that call the deal function and get assigned a random card value of 1-52.
//TRY TO TURN INTO AN ARRAY OR OBJECT

var card1 = deal();
var card2 = deal();
var card3 = deal();
var card4 = deal();
var card5 = deal();

// console.log(card1)
// console.log(card2)


// Function that gets the value of each card from 0-12 instead of 1-52; if card is a face card (0,11,12), assigns 10 points; if card is ace (1), assigns 11 points; all ofther cards are assigned modulo value (2-10). 

var getValue = function(card) {
    if(card % 13 > 10 || card % 13 == 0) {
    	return 10;
    } else if(card % 13 == 1) {
    	return 11;
    } else if(card % 13 == 1 && card) {
    } else {
        return card % 13;
    }
};


// Function that will assign points by adding up the cards (with new values of 0-12). TRY TO USE LOOP TO TRY TO CALCULATE THE SCORE OF AN INDEX OF CARDS

var score = function() {
	if(card1 % 13 == 1 && card2 % 13 == 1) {
		return getValue(card1) + 1;
	} else {
    return getValue(card1) + getValue(card2);
	}
}

console.log(getValue(card1));
console.log(getValue(card2));
console.log(score());
alert("You were dealt a " + getValue(card1) + " and " + getValue(card2) + " your hand is " + (score()));


// Function that determines winner if deal equals 21; tells player they bust if score is over 21; gives player the option to hit again if they have less than 21. 

var nextMove = function () {
	if(score() == 21) {
		return "you win!";
	} else if(score() > 21) {
		return "you bust"
	} else if(score() < 21) {
		var input = confirm("hit 'ok' to hit or 'cancel' to stay");
			if(input==true) {
				return getValue(card3);
			} else {
				return score();
			}
	} else {}
}
nextMove();
console.log(getValue(card3));

// Function that gets score if player hit and received another card. WANT TO REPLACE WITH SCORE LOOP

var score2 = function() {
	return getValue(card1) + getValue(card2) + getValue(card3);
}
console.log(score2());
alert("You were dealt a " + getValue(card3) + " your hand is now " + (score2()));









//======Random thoughts and ideas=====

// var obj = {
//     key1: value1,
//     key2: value2
// };

// pop the last card out (ogres game)




//=====OLD CODE=====


// Function that gets two random numbers and sums them

// var twoRandomScores = function () {
//     var score1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
//     console.log(score1);
//     var score2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
//     console.log(score2);
//     return score1 + score2;
// }

// twoRandomScores();

// Gets a random number between 1 and 52

// var randomScore = Math.floor(Math.random() * (52 - 1 + 1)) + 1; 
// console.log("I got the score " + randomScore);

// Gets a random number between 1 and 52 and then uses modulo division get the reminder when the random number is divided by 13. This is how suits will be assigned.

// var deal = Math.floor(Math.random() * (52 - 1 + 1)) + 1; 
// var final = deal % 13;
// console.log(final);

// Gets a random number between 1 and 40 and uses modulo division to assign a variable as either even or odd. This is how K, Q, J will be assigned values of 10.

// var outcome;
// var deal = Math.floor(Math.random() * (40 - 1 + 1)) + 1; 
// if(deal % 2 ===0) {
//     outcome = "even";
// } else {
//     outcome = "odd";
// }
// console.log(deal);

// Function that allows player to hit or stay. TRY TO USE A LOOP TO CONTINUE TO ASK UNTIL PLAYER BUSTS, HITS 21 OR STAYS.

// var hitOrStay = function() {
// 	var input = prompt("Do you want to hit or stay?");
// 		if(input == "hit") {
// 			return getValue(card3);
// 		} else if(input == "stay") {
// 			return score();
// 			console.log("game over");
// 		} else {
// 			console.log("invalid input");
// 		}
// }

// hitOrStay();

