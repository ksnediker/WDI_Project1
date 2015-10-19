//======Blackjack Code=====

// Function that returns random cards. If card is a face card (0,11,12), assigns 10 points; if card is ace (1), assigns 11 points; all ofther cards are assigned modulo value (2-10). 
$(function () {

var deal = function() {
    var card = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
    if(card % 13 > 10 || card % 13 == 0) {
    	return 10;
    } else if(card % 13 == 1) {
    	return 11;
    } else if(card % 13 == 1 && card) {
    } else {
        return card % 13;
    }
}

// Function that caluculates the total value of player cards
var score = function() {
	var totalScore = playerHand[0];
	for (var i=1; i<=cardCount; i++) {
		if(playerHand[0] == 11 && playerHand[1] == 11) {
			totalScore = totalScore + 1;
			totalScore = totalScore + playerHand[i];
		return totalScore;
		} else {
			totalScore = totalScore + playerHand[i];
		}
	} 
	playerFinal = totalScore;
	$('#player-card-total').empty()
	$('#player-card-total').append(totalScore);
	return totalScore;
}


// Function that determines winner
var gameWinner = function () {
	playerFinal = score();
	dealerFinal = dealerTotal();
if(playerFinal == 21) {
	$('#player-winner').html("player wins");
	gameOn = false;
	player.dollars = player.dollars + 20;
} else if(playerFinal > dealerFinal && playerFinal < 21 ) {
	$('#player-winner').html("player wins");
	gameOn = false;
	player.dollars = player.dollars + 10;	
} else if(dealerFinal > 21) {
	$('#player-winner').html("player wins");
	gameOn = false;
	player.dollars = player.dollars + 10;		
} else if(dealerFinal == 21) {
	$('#dealer-winner').html("dealer wins");
	player.dollars = player.dollars - 10;
	gameOn = false;
} else if(playerFinal==dealerFinal) {
	alert("draw");
	gameOn = false;
} else {
	$('#dealer-winner').html("dealer wins");
	player.dollars = player.dollars - 10;
	gameOn = false;
}

// alert("Player has " + player.dollars + " dollars left.")
}

// Function that determines if player gets blackjack, busts, or has the option to hit; automatically hits the dealer if they have under 17. Also appends cards to HTML
var nextMove = function () {
	if(score() == 21) {
		gameOn = false;
		gameWinner();
	} else if(score() > 21) {
		gameOn = false;
	} else if(score() < 21) {
		gameOn = false;
		var $playerHitOrStay = $('#hit-or-stay');
		$playerHitOrStay.click(function(event) {
			gameOn = true;
			if(event.target.id=='hit') {
				var nextCard = deal();
				cardCount++;
				playerHand[cardCount] = nextCard;
				var currentCssId = cardCount + 1
				$('#pcard' + currentCssId).append(playerHand[cardCount]);	
				// alert("You were dealt a " + playerHand[cardCount] + " your hand is now " + (score()))
				gameWinner();
					if(dealerTotal() < 17) {
						var nextDealerCard = deal();
						dealerCardCount++;
						dealerHand[dealerCardCount] = nextDealerCard;
						var currentDCssId = dealerCardCount + 1
						$('#dcard' + currentDCssId).append(dealerHand[dealerCardCount]);	
						// alert("Dealer was dealt a " + dealerHand[dealerCardCount] + ", dealer's hand is now " + (dealerTotal()));
						gameWinner();
					}
				$('#dealer-card-total').append(dealerTotal());
			} else if(event.target.id=='stay') {
				// alert("You stayed with " + score());
				gameWinner();
				gameOn = false;
					if(dealerTotal() < 17) {
						var nextDealerCard = deal();
						dealerCardCount++;
						dealerHand[dealerCardCount] = nextDealerCard;
						var currentDCssId = dealerCardCount + 1
						$('#dcard' + currentDCssId).append(dealerHand[dealerCardCount]);
						// alert("Dealer was dealt a " + dealerHand[dealerCardCount] + ", dealer's hand is now " + (dealerTotal()));
						gameWinner();
					} else if(dealerTotal() >= 17) {
						gameOn = false;
					}
			}
		});
	}
}

// Function that calculates the dealer's score
var dealerTotal = function() {
	var dealerScore = dealerHand[0];
		if(dealerHand[0] == 11 && dealerHand[1] == 11) {
			dealerScore = dealerScore + 1;
			dealerScore = dealerScore + dealerHand[i];
			return dealerScore;
		} else {
			for (i=1; i<=dealerCardCount; i++) {
				dealerScore = dealerScore + dealerHand[i];
		}
	} 
	dealerFinal = dealerScore;
	$('#dealer-card-total').empty()
	$('#dealer-card-total').append(dealerScore);
	return dealerScore;
}

// object that holds player's dollars
var player = {
	dollars: 100
};

// Arrays of cards for player and dealer and card count variables
var playerHand = [deal(), deal()]; 
var dealerHand = [deal(), deal()];
var cardCount = 1;
var dealerCardCount = 1;

$('#pcard1').append(playerHand[0]);
$('#pcard2').append(playerHand[1]);

$('#dcard1').append(dealerHand[0]);
$('#dcard2').append(dealerHand[1]);

// alert("You were dealt a " + playerHand[0] + " and " + playerHand[1] + ", your hand is " + (score()));

// Running the game
var gameOn = true;
while(gameOn == true) {
		nextMove();	
}

// alert("Dealer was dealt a " + dealerHand[0] + " and " + dealerHand[1] + ", dealer's hand is " + dealerTotal());

});



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


