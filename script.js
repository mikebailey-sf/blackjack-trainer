/*----- constants -----*/ 
const cardSuit = ['c','d','h','s'];
const cardRank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
const cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];


/*----- app's state (variables) -----*/
var shoe = [];
var dh = [];
var ph = [];
var playerAction = "";
var hitCount = 0;


/*----- cached element references -----*/ 
var dealer = document.getElementById('dealer');
var player = document.getElementById('player'); 

/*----- event listeners -----*/ 
document.getElementById('player').addEventListener('click', onClick);

/*----- functions -----*/
function init() {
    shoe = shuffle(makeDeck(cardSuit, cardValue, cardRank));
    deal();
}

function deal() {
    //dealer.remove('div.hand');
    // /player.remove('div.hand');
    dealerHand = new Hand();
    playerHand = new Hand();
    dealerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    dealerHand.calcTotal();
    playerHand.calcTotal();
    hitCount = 1;
    render("start");
}

function onHit() {
    playerAction = "hit";
    hitCount+=1;
    feedback(playerAction);
    playerHand.cards.push(shoe.pop());
    playerHand.calcTotal();
    render("hit");
    if (playerHand.total >= 21) {
        nextHand();
    }
}

function onStand() {
    playerAction = "stand";
    feedback(playerAction);
    nextHand();
}

function onDouble() {
    playerAction = "double";
    feedback(playerAction);   
    nextHand();
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
    //alert ('You won or lost!');
    $('#dealer').html('');
    $('#player').html('');
    deal();
}

function dealerTurn() {

}

function feedback(action){
    if (action === basicStrategy.hard[dealerHand.total][playerHand.total])
    {
        $('#feedback').html(
            "Right!"
        );
    } else {
        $('#feedback').html(
            "Wrong!"
        );
    }
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
    switch(evt.target.name) {
        case "hit": 
            onHit();
        break;
        case "stand": 
            onStand();
        break;
        case "double":
            onDouble(); 
        break;
        case "split": 
            onSplit();
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
                <button name='split2'>Split</button>
            </div>
        </div>`;        
        $(player).html("");
        $(player).append(playerTemplate);
        $(player).append(splitTemplate);
    }

    if (state==="hit") {
        $(player).prepend(`<img class="card" src="img/${playerHand.cards[hitCount][2]}${playerHand.cards[hitCount][1]}.png">`);
    }
}

init(); 
