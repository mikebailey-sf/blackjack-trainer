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
    
    dealerHand = new Hand();
    playerHand = new Hand();
    dealerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    dealerHand.total = dealerHand.cards[0][0];
    playerHand.calcTotal();
    render("start");
}

function onDouble() {
    playerAction = "double";
    feedback(playerAction);   
}

function onSplit() {
    playerAction = "split";
    if (playerHand.cards[0][0] === playerHand.cards[1][0]){
        playerHand2 = new Hand();
        playerHand2.cards.push(playerHand.cards.pop());
        playerHand.cards.push(shoe.pop());
        playerHand2.cards.push(shoe.pop());
        render("split");
    }
}

function nextHand() {
    $('#dealer').html('');
    $('#player').html('');
    deal();
}

function dealerTurn() {

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
            playerHand.hit(false);
        break;
        case "hit2": 
            playerHand2.hit(true);
        break;
        case "stand": 
            playerHand.stand();
        break;
        case "stand2": 
            playerHand2.stand(true);
        break;        
        case "double":
            onDouble(); 
        break;
        case "split": 
            onSplit();
            playerHand.feedback("split");

        break;                
    }
}

function render(state) {
    var playerTemplate = `
    <div class="hand">
        <img class="card" src="img/${playerHand.cards[0][2]}${playerHand.cards[0][1]}.png">
        <img class="card" src="img/${playerHand.cards[1][2]}${playerHand.cards[1][1]}.png">
        <div id="controls">
            <button name='hit'>Hit</button>
            <button name='stand'>Stand</button>
            <button name='double'>Double</button>
            <button name='split'>Split</button>
        </div>
    </div>`;

    if(state==="start"){
        $(dealer).append(`<div class="hand"><img class="card" src="img/${dealerHand.cards[0][2]}${dealerHand.cards[0][1]}.png"></div>`);
        $(player).append(playerTemplate);
    }

    if (state==="split"){
        var splitTemplate = `
        <div class="hand">
            <img class="card" src="img/${playerHand2.cards[0][2]}${playerHand2.cards[0][1]}.png">
            <img class="card" src="img/${playerHand2.cards[1][2]}${playerHand2.cards[1][1]}.png">
            <div id="controls">
                <button name='hit2'>Hit</button>
                <button name='stand2'>Stand</button>
                <button name='double2'>Double</button>
            </div>
        </div>`;        
        $(player).html("");
        $(player).append(playerTemplate);
        $(player).append(splitTemplate);
    }

    if (state==="hit") {
        $("#player > div.hand:first-child").prepend(`<img class="card" src="img/${playerHand.cards[playerHand.cards.length-1][2]}${playerHand.cards[playerHand.cards.length-1][1]}.png">`);
    }

    if (state==="splithit") {
        $("#player > div.hand:nth-child(2)").prepend(`<img class="card" src="img/${playerHand2.cards[playerHand2.cards.length-1][2]}${playerHand2.cards[playerHand2.cards.length-1][1]}.png">`);
    }
}

init(); 