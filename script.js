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
    let dealt = shoe.pop();
    $(dealer).append(`<div class='card'>${dealt}</div>`);
    dh.push(dealt);
    
    dealt = shoe.pop();
    $(dealer).append(`<div class='card'>${dealt}</div>`);
    dh.push(dealt);

    dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    ph.push(dealt);

    dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    ph.push(dealt);

    dealerHand = new Hand(dh);
    playerHand = new Hand(ph);
    console.log(ph);

}

function render() {

}

function onClick(evt) {

}

function onHit() {
    let dealt = shoe.pop();
    $(player).prepend(`<div class='card'>${dealt}</div>`);
    playerHand.cards.push(dealt);
    playerHand.calcTotal();
    //$('#feedback').html(playerHand.total);
    console.log(playerHand.total)
}

function onStand() {
    dealerTurn();
}

function onDouble() {
    onHit();
}

function onSplit() {

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



init(); 
