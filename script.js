/*----- constants -----*/ 
const cardSuit = ['c','d','h','s'];
const cardRank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
const cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];


/*----- app's state (variables) -----*/
var shoe = [];
var dh = [];
var ph = [];
var playerAction = "";


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
    $('.hand').remove('div.card');
    dealerHand = new Hand();
    playerHand = new Hand();
    dealerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    playerHand.cards.push(shoe.pop());
    dealerHand.calcTotal();
    playerHand.calcTotal();
    render("start");
}

function render(state) {
    if(state==="start"){
        $(dealer).append(`<div class='card'>${dealerHand.cards[0]}</div>`);
        $(player).append(playerTemplate);
        $(player).prepend(`<div class='card'>${playerHand.cards[0]}</div>`);
        $(player).prepend(`<div class='card'>${playerHand.cards[0]}</div>`);
    }

    if (state==="split"){

    }

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
        break;
        case "split": 
        break;                
    }
}

function onHit() {
    playerAction = "hit";
    feedback(playerAction);
    let dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    playerHand.cards.push(dealt);
    playerHand.calcTotal();
    //if (playerHand.total > 21){deal();}
}

function onStand() {
    playerAction = "stand";
    feedback(playerAction);
    deal();

}

function onDouble() {
    playerAction = "double";
    feedback(playerAction);   
    deal();
}

function onSplit() {
    playerAction = "split";
    if (playerHand.cards[0][0] === playerHand.cards[1][0]){

    }
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



init(); 
