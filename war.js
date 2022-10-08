
class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.playingDeck = [];
    this.createDeck();
  }

  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.playingDeck.push(new Card(suits[i], ranks[j], j + 2));
      }
    }

    return this.playingDeck;
  }
}
const player1 = [];
const player2 = [];

let gamblerDeck = new Deck();
function r(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
}
r(gamblerDeck.playingDeck)
// console.log(gamblerDeck)
for (i = 0; i < 26; i++){
  // player1[i] = gamblerDeck.playingDeck[0];
  player1[i] = gamblerDeck.playingDeck.shift();
}
for (i = 0; i < 26; i++) {
  // player2[i] = gamblerDeck.playingDeck[0];
  player2[i]=gamblerDeck.playingDeck.shift();
}

let compareCards = []
let war = "              I DECLARE WAR!!!!!!!!!!!!";

function playcard(arr1, arr2) {
  compareCards.unshift(arr1.shift())  
  compareCards.unshift(arr2.shift())
  console.log(`Player 1 has played the ${compareCards[0].rank} of ${compareCards[0].suit}, 
    Player 2 has played the ${compareCards[1].rank} of ${compareCards[1].suit}`)
}

function iDeclareWar(arr1, arr2) {
  console.log(war)
  for (i = 0; i < 3; i++){
    console.log((arr1.shift))
    compareCards.unshift((arr2.shift))
  }
}
function cardsRemaining() {
      console.log(`Player 1: ${player1.length} cards`);
      console.log(`Player 2: ${player2.length} cards`);
}
// play game 

while (player1.length && player2.length > 0) {
  playcard(player1, player2);
  //the war clause
  if (compareCards[0].value == compareCards[1].value) {
    console.log(war)
    if (player1.length > 3) {
      for (let i = 0; i < 3; i++){
      compareCards.unshift(player1.shift())
    }
  } else if (player1.length != 1 && player1.length <= 3) {
    for (let i = 0; i <= (player1.length - 2); i++){
        compareCards.unshift(player1.shift())
      }
    };
    if (player2.length > 3) {
      for (let i = 0; i < 3; i++){
      compareCards.unshift(player2.shift())
      console.log(compareCards.length)
    }
  } else if (player2.length != 1 && player2.length <= 3) {
    for (let i = 0; i <= (player2.length - 2); i++){
        compareCards.unshift(player2.shift())
        console.log(compareCards.length)
      }
    };
    //player 1 wins
  } else if (compareCards[0].value > compareCards[1].value) {
    console.log(`Player 1 wins! kitty: ${compareCards.length}`);
    player1.push(...compareCards);
    compareCards.splice(0, compareCards.length)  
    cardsRemaining()
  }
  //player 2 wins
  else if (compareCards[0].value < compareCards[1].value) {
    console.log(`Player 2 wins! kitty: ${compareCards.length}`);
     player2.push(...compareCards);
    compareCards.splice(0, compareCards.length)
    cardsRemaining()
  }
}