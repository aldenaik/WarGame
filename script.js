$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	
	deck=_.shuffle(deck);
	console.log(deck);

	
	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays

	var cards_player_1 = deck;

	var cards_player_2 = deck.splice(0,26);


	console.log (cards_player_1)
	console.log (cards_player_2)
	console.log (cards_player_1[0].number)
	console.log (cards_player_2[0].number)
	
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war (deckA,deckB){

		holding1=cards_player_1.splice(0,1);
		holding2=cards_player_2.splice(0,1);


	 		if (cards_player_1[0].number>cards_player_2[0].number)
	 		{
					$(cards_player_1.push(holding1))
					$(cards_player_1.push(holding2))
						holding1.splice(0,1);
						holding2.splice(0,1);


			}	 
	 		else if (cards_player_1[0].number<cards_player_2[0].number)
	 		{ 
					$(cards_player_2.push(holding1))
					$(cards_player_2.push(holding2))
						holding1.splice(0,1);
						holding2.splice(0,1);	 	}
	 	else {
	 			$(cards_player_1.push(holding1))
				$(cards_player_2.push(holding2))
						holding1.splice(0,1);
						holding2.splice(0,1);
	 	}
	};


	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		$(".btn btn-lg btn-warning").click(war (cards_player_1,cards_player_2))
				
				

//
		
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp_count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my_count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});