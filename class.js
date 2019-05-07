class Hand {
	constructor() {
		this.cards = [];
		this.total = 0;
	}
	calcTotal() {
		let t = 0;
		this.cards.forEach(function(card){
			t+=card[0];
		});
		this.total = t;
	}
	//Include hit/split/double methods here?
	hit(split = false) {
		playerAction = "hit";
		feedback(playerAction);
		this.cards.push(shoe.pop());
		this.calcTotal();
		if (split){
			render("splithit");
		} else {
			render("hit");
		}
	}
	stand(split = false){
		playerAction = "stand";
		feedback(playerAction);
	}
}

basicStrategy = {
	hard: {
		2: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		3: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		4: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'stand', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		5: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		6: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		7: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		8: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		9: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		10: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		11: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},

	},
	soft: {
		2: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		3: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		4: {13: 'hit', 14: 'hit', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		5: {13: 'double', 14: 'double', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		6: {13: 'double', 14: 'double', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'double', 20: 'stand', 21: 'stand'},
		7: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		8: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		9: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
		10: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
		11: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
	},
	pair: {
		2: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'hit'},
		3: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'hit'},
		4: {2: 'hit', 3: 'hit', 4: 'hit', 5: 'split', 6: 'split', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'hit'},
		5: {2: 'double', 3: 'double', 4: 'double', 5: 'double', 6: 'double', 7: 'double', 8: 'double', 9: 'double', 10: 'hit', 11: 'hit'},
		6: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'hit'},
		7: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'hit'},
		8: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'split', 11: 'split'},
		8: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'split', 11: 'split'},
		9: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'stand', 8: 'split', 9: 'split', 10: 'stand', 11: 'stand'},
		10: {2: 'stand', 3: 'stand', 4: 'stand', 5: 'stand', 6: 'stand', 7: 'stand', 8: 'stand', 9: 'stand', 10: 'stand', 11: 'stand'},
		11: {2: 'split', 3: 'split', 4: 'split', 5: 'split', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'split', 11: 'split'},
	}
};


/*
 * 
 * https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 */
function shuffle (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};





