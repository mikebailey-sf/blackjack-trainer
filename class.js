class Hand {
	constructor(cards){
		this.cards = cards;
		let t = 0;
		cards.forEach(function(card){
			t+=card[0];
		});
		this.total = t;
	}
	calcTotal(){
		let t = 0;
		this.cards.forEach(function(card){
			t+=card[0];
		});
		this.total = t;
	}
}



basicHard = {
		'd2': {'5': 'h', '6': 'h', '7': 'h', '8': 'h', '9': 'h', '10': 'd', '11': 'd', '12': 'h', '13': 's', '14': 's', '15': 's', '16': 's', '17': 's', '18': 's', '19': 's', '20': 's', '21': 's'},
/*
		'3': 
		'4': 
		'5': 
		'6': 
		'7': 
		'8': 
		'9':
		'10':
		'A':   
	},
	soft = {
		'2': 
		'3': 
		'4': 
		'5': 
		'6': 
		'7': 
		'8': 
		'9':
		'10':
		'A':   
	},
	pair = {
		'2':
		'3': 
		'4': 
		'5': 
		'6': 
		'7': 
		'8': 
		'9':
		'10':
		'A':   
*/
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
