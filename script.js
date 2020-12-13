/*----- constants -----*/ 
const cardSuit = ['c','d','h','s'];
const cardRank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
const cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

/*----- app's state (variables) -----*/
var shoe = [];
var dh = [];
var ph = [];
var playerAction = "";
var runningCount = 0;
var actionCount = 0;
var correctCount = 0;
var incorrectCount = 0;
var correctPlay = "";
var correct;
var softFeedback;

/*----- cached element references -----*/ 
var dealer = document.getElementById('dealer');
var player = document.getElementById('player'); 

/*----- event listeners -----*/ 
document.getElementById('player').addEventListener('click', onClick);
document.getElementById('new-hand').addEventListener('click', nextHand);

/*----- functions -----*/
function init() {
    shoe = shuffle(makeDeck(cardSuit, cardValue, cardRank));
    deal();
}

function deal() {   
    if (shoe.length < 154){
        init();
    }
    dealerHand = new Hand();
    playerHand = new Hand();
    dealerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    dealerHand.total = dealerHand.cards[0][0];
    playerHand.calcTotal();
    if (playerHand.total === 21) {init(); 
        deal(); 
     } else {
        render("start");
    }
}

function nextHand() {
    deal();
}

function makeDeck (suits, values, ranks) {
    let deck = [];
    for(i=0;i<6;i++){
        for (let suit in suits) {
            let c = 0;
            for (let value in values) {
                deck.push([values[value], suits[suit], ranks[c]]);
                c++;
            }
        }
    }    
    return deck;
}

function onClick(evt) {
    actionCount++;
    switch(evt.target.name) {
        case "hit": 
            playerHand.hit();
        break;
        case "stand": 
            playerHand.stand();
        break;      
        case "double":
            if (playerHand.cards.length === 2){
                playerHand.double(); 
            }
        break;
        case "split": 
            if(playerHand.cards[0][0] === playerHand.cards[1][0] && playerHand.cards.length === 2) {
                playerHand.split();
            }
        break;                
    }
}
function render(state) {
    var playerTemplate = `
    <div class="hand">
        <img class="card" src="img/${playerHand.cards[0][2]}${playerHand.cards[0][1]}.png">
        <img class="card" src="img/${playerHand.cards[1][2]}${playerHand.cards[1][1]}.png">
        <div id="controls">
            <div class="field is-grouped">
                <button class="button is-large is-success is-focused has-text-weight-bold" name='hit'>Hit</button>
                <button class="button is-large is-success is-focused has-text-weight-bold" name='stand'>Stand</button>
            </div>
            <div class="field is-grouped">
                <button class="button is-large is-success is-focused has-text-weight-bold" name='double'>Double</button>
                <button class="button is-large is-success is-focused has-text-weight-bold" id='splitButton' name='split'>Split</button>
            </div>
        </div>
    </div>`;

    if(state==="start"){
        $('#dealer').html('');
        $('#player').html('');
        $(dealer).append(`<div class="hand"><img class="card" src="img/${dealerHand.cards[0][2]}${dealerHand.cards[0][1]}.png"></div>`);
        $(player).append(playerTemplate);
        if (!playerHand.pair) {
            document.getElementById('splitButton').disabled="true";
        }
    }

    if (state==="hit") {
        $("#player > div.hand:first-child").prepend(`<img class="card" src="img/${playerHand.cards[playerHand.cards.length-1][2]}${playerHand.cards[playerHand.cards.length-1][1]}.png">`);
    }

    if (state === "feedback"){
        $("#percentage").html(`
            You've got ${correctCount} out of ${actionCount} decisions correct!<br>
            <span>${Math.floor(correctCount/actionCount * 100)}%</span>
        `);
        if (correct) {
            $("#feedback").html("RIGHT!");
        } else {
            if (playerHand.pair && playerHand.length == 2) {
                $("#feedback").html(`WRONG! The correct play was to ${correctPlay}. When you have a pair of ${playerHand.cards[0][2].toUpperCase()}'s with the dealer showing a ${dealerHand.cards[0][2].toUpperCase()}, you're gonna wanna ${correctPlay}`);
                return;
            }
            if (playerHand.soft) {softFeedback = "soft";} else {softFeedback = "hard";}
            if (correctPlay == "double" && playerHand.cards.length > 2) {correctPlay = "hit";}
            $("#feedback").html(`WRONG! The correct play was to ${correctPlay}. When you have a ${softFeedback} ${playerHand.total} and the dealer has a ${dealerHand.cards[0][2].toUpperCase()} showing, you gotta ${correctPlay}!`);
        }
    }
}

init(); 