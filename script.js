/*----- constants -----*/ 
const cardSuit = ['c','d','h','s'];
const cardRank = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
const cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

const dealerRules = {

};

const optimalPlay = {

};

/*----- app's state (variables) -----*/
var shoe = [];
var dh = [];
var ph = [];
var playerAction = "";


/*----- cached element references -----*/ 
var dealer = document.getElementById('dealer');
var player = document.getElementsByClassName('player');

/*----- event listeners -----*/ 
//let click = document.getElementById('#controls').addEventListener('click', onClick);
document.getElementById('hit').addEventListener('click', onHit);
document.getElementById('stand').addEventListener('click', onStand);
document.getElementById('double').addEventListener('click', onDouble);
document.getElementById('split').addEventListener('click', onSplit);


/*----- functions -----*/
function init() {
    shoe = shuffle(makeDeck(cardSuit, cardValue, cardRank));
    deal();
}

function deal() {
    $('.card').remove('div.card');
    dealerHand = new Hand();
    playerHand = new Hand();

    let dealt = shoe.pop();
    $(dealer).append(`<div class='card'>${dealt}</div>`);
    dealerHand.cards.push(dealt);

    dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    playerHand.cards.push(dealt);

    dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    playerHand.cards.push(dealt);

    dealerHand.calcTotal();
    playerHand.calcTotal();

}

function render() {

}

function onClick(evt) {

}

function onHit() {
    playerAction = "hit";
   feedback(playerAction);
    let dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    playerHand.cards.push(dealt);
    playerHand.calcTotal();
    if (playerHand.total > 21){deal();}
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
