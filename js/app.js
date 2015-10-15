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


var twoRandomScores = function (score1,score2) {
    var score1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(score1); 
    var score2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(score2);
    return score1 + score2;
}

twoRandomScores();

// var obj = {
//     key1: value1,
//     key2: value2
// };

pop the last card out (ogres game)