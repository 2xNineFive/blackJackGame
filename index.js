// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
// const deck = [];
// const suits = ["hearts", "spades", "clubs", "diamonds"];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
// const makeDeck = (rank, suit) => {
//   const card = {
//     rank: rank,
//     suit: suit,
//     pointValue: rank > 10 ? 10 : rank,
//   };
//   deck.push(card);
// };

// for (let suit of suits) {
//   for (const rank of ranks) {
//     makeDeck(rank, suit);
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   // Execute after page load
// });


   //both of these variables are used to: compare the values of the dealer's hand 
    //and the player's hand, to determine a winner and to display a message. 

    var dealerSum = 0;  //this variable will be used to track the score of the dealer's hand 
    var yourSum = 0;    //this variable will be used to track the scor of the player's hand. 

var dealerAceCount = 0;
var yourAceCount = 0; 

var hidden; // this is the variable that will store and display the hidden card. 
var deck;   // this is the variable that 

var canHit = true; //allows the player (you) to draw while yourSum <= 21


// document.getElementById("deal-button").addEventListener("click", event => restartGame());





function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function restartGame() {
    const dealerHand = document.getElementById("dealer-hand");
    const playerHand = document.getElementById("player-hand");
    const winLoseMessage = document.getElementById("messages");
    document.getElementById("dealer-points").innerText = "";
    document.getElementById("player-points").innerText = "";
    document.getElementById("messages").innerText = "";
    
    removeAllChildNodes(dealerHand);
    removeAllChildNodes(playerHand);
    removeAllChildNodes(winLoseMessage);

    let cardImg = document.createElement("img");
    cardImg.src = "./images/BACK.png";
    cardImg.id = "hidden"
    dealerHand.append(cardImg)


    
    dealerSum = 0;
    yourSum = 0;

    dealerAceCount = 0;
    yourAceCount = 0; 

    hidden = undefined;
    deck = undefined;

    // canHit = false;
    
    buildDeck();
    shuffleDeck();
    startGame();

    console.log(playerHand);
    console.log(dealerHand + "this is what im lookig for")
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./images/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-hand").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./images/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("player-hand").append(cardImg);
    }

    console.log(yourSum);
}

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
    document.getElementById("hit-button").addEventListener("click", hit);
    document.getElementById("stand-button").addEventListener("click", stay);
    document.getElementById("deal-button").addEventListener("click", event => restartGame());
}



function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./images/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("player-hand").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
    }

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./images/" + hidden + ".png";

    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!";
    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
        message = "Tie!";
    }
    else if (yourSum > dealerSum) {
        message = "You Win!";
    }
    else if (yourSum < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-points").innerText = dealerSum;
    document.getElementById("player-points").innerText = yourSum;
    document.getElementById("messages").innerText = message;
    
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}
