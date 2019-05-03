/*----- constants -----*/ 
const cardSuit = ['c','d','h','s'];
const cardValue = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];

const dealerRules = {

};

const optimalPlay = {

};

/*----- app's state (variables) -----*/
var shoe = [];

/*----- cached element references -----*/ 
var dealer = document.getElementById('dealer');
var player = document.getElementById('player');

/*----- event listeners -----*/ 
//let click = document.getElementById('#controls').addEventListener('click', onClick);
document.getElementById('hit').addEventListener('click', onHit);
document.getElementById('stand').addEventListener('click', onStand);
document.getElementById('double').addEventListener('click', onDouble);
document.getElementById('split').addEventListener('click', onSplit);


/*----- functions -----*/
function init() {
    shoe = shuffle(makeDeck(cardSuit, cardValue));
    deal();
}

function deal() {
    
    $(dealer).append(`<div class='card'>${shoe.pop();}</div>`);
    $(dealer).append(`<div class='card'>${shoe.pop();}</div>`);
    $(player).append(`<div class='card'>${shoe.pop();}</div>`);
    $(player).append(`<div class='card'>${shoe.pop();}</div>`);

}

function render() {

}

function onClick(evt) {

}

function onHit() {

}

function onStand() {

}

function onDouble() {

}

function onSplit() {

}

function dealerTurn() {

}

function makeDeck (suits, values) {
    let deck = [];
    for(i=0;i<6;i++){
        for (let suit in suits) {
            for (let value in values) {
                deck.push([values[value], suits[suit]]);
            }
        }
    }    
    return deck;
}



init(); 
